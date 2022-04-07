import * as client from 'lib/client';
import cuid from 'cuid';

import * as I from 'interface';

export const create = async (e: I.CreateCoAuthorRequestBody, publicationId: string) => {
    const create = await client.prisma.coAuthors.create({
        data: {
            publicationId,
            email: e.email
        },
        select: {
            id: true,
            publicationId: true,
            email: true,
            linkedUser: true,
            confirmedCoAuthor: true
        }
    });

    return create;
};

export const deleteCoAuthor = async (id: string) => {
    const deleteCoAuthor = await client.prisma.coAuthors.delete({
        where: {
            id
        }
    });

    return deleteCoAuthor;
};

export const resendCoAuthor = async (id: string) => {
    const resendCoAuthor = await client.prisma.coAuthors.update({
        where: {
            id
        },
        data: {
            code: cuid()
        }
    });

    return resendCoAuthor;
};

export const confirmCoAuthor = async (userId: string, publicationId: string, email: string, code: string) => {
    const confirmCoAuthor = await client.prisma.coAuthors.updateMany({
        // updateMany so pubId, email and code can be confirmed.
        where: {
            publicationId,
            email,
            code
        },
        data: {
            linkedUser: userId
        }
    });

    return confirmCoAuthor.count;
};

export const denyCoAuthor = async (publicationId: string, email: string, code: string) => {
    const denyCoAuthor = await client.prisma.coAuthors.deleteMany({
        // deleteMany so pubId, email and code can be confirmed.
        where: {
            publicationId,
            email,
            code
        }
    });

    return denyCoAuthor.count;
};

export const updateCoAuthor = async (publicationId: string, userId: string, confirmedCoAuthor: boolean) => {
    const updateCoAuthor = await client.prisma.coAuthors.updateMany({
        // updateMany so pubId, email and code can be confirmed.
        where: {
            publicationId,
            linkedUser: userId
        },
        data: {
            confirmedCoAuthor
        }
    });
    console.log(updateCoAuthor);
    return updateCoAuthor;
};

export const resetCoAuthors = async (publicationId: string) => {
    const resetCoAuthors = await client.prisma.coAuthors.updateMany({
        where: {
            publicationId
        },
        data: {
            confirmedCoAuthor: false,
            code: cuid()
        }
    });
    console.log(resetCoAuthors);
    return resetCoAuthors;
};

export const isUserAlreadyCoAuthor = async (e: I.CreateCoAuthorRequestBody, publicationId: string) => {
    const publication = await client.prisma.coAuthors.count({
        where: {
            email: {
                contains: e.email
            },
            publicationId: {
                contains: publicationId
            }
        }
    });

    return Boolean(publication);
};
