import htmlToText from 'html-to-text';
import AWS from 'aws-sdk';

import * as SeedData from './seeds';
import * as client from '../src/lib/client';

export const initialDevSeed = async (): Promise<void> => {
    // Create users
    await client.prisma.user.createMany({ data: SeedData.usersDevSeedData });

    const doesIndexExists = await client.search.indices.exists({
        index: 'publications'
    });

    if (doesIndexExists.body) {
        await client.search.indices.delete({
            index: 'publications'
        });
    }

    // Create publications
    // not ideal, but best thing I can do right now. For some reason createMany will not work with provided seed data...
    for (let publication of SeedData.publicationsDevSeedData) {
        await client.prisma.publication.create({
            // @ts-ignore
            data: publication
        });

        if (publication.currentStatus === 'LIVE') {
            await client.search.create({
                index: 'publications',
                id: publication.id,
                body: {
                    id: publication.id,
                    type: publication.type,
                    title: publication.title,
                    licence: publication.licence,
                    description: publication.description,
                    keywords: publication.keywords,
                    content: publication.content,
                    currentStatus: publication.currentStatus,
                    publishedDate: publication.publishedDate,
                    cleanContent: htmlToText.convert(publication.content)
                }
            });
        }
    }

    // create S3 bucket locally for image uploads
    if (process.env.STAGE === 'local') {
        const s3 = new AWS.S3({
            credentials: {
                accessKeyId: 'dummy-key',
                secretAccessKey: 'dummy-secret'
            },
            region: 'eu-west-1',
            endpoint: 'http://localhost:4566',
            s3ForcePathStyle: true
        });

        try {
            await s3
                .getBucketAcl({
                    Bucket: `science-octopus-publishing-images-${process.env.STAGE}`
                })
                .promise();
            console.log('Bucket already exists');
        } catch (err) {
            // Bucket does not exist, therefor create
            await s3
                .createBucket({
                    Bucket: `science-octopus-publishing-images-${process.env.STAGE}`
                })
                .promise();
            console.log('Bucket created');
        }
    }
};

initialDevSeed()
    .catch((e) => {
        console.error(e);
        // process.exit(1);
    })
    .finally(async () => {
        await client.prisma.$disconnect();
    });
