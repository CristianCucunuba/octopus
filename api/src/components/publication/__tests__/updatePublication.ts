import * as testUtils from 'lib/testUtils';

beforeEach(async () => {
    await testUtils.clearDB();
    await testUtils.initialSeed();
});

describe('Update publication', () => {
    test('Cannot update without permission', async () => {
        const updatePublication = await testUtils.agent.patch('/publications/publication-interpretation-draft');

        expect(updatePublication.status).toEqual(401);
    });

    test('Cannot update with incorrect permissions', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 987654321 });

        expect(updatePublication.status).toEqual(403);
    });

    test('Can update publication title', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ title: 'New title' });

        expect(updatePublication.status).toEqual(200);
        expect(updatePublication.body.title).toEqual('New title');
    });

    test('Can update publication content if "safe" HTML', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ content: '<p>Hello <a href="#nathan">Nathan</a></p>' });

        expect(updatePublication.status).toEqual(200);
    });

    test('Cannot update publication content if HTML not "safe" (1)', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ content: '<p class="class">Hello <a href="#nathan">Nathan</a></p>' });

        expect(updatePublication.status).toEqual(404);
    });

    test('Cannot update publication content if HTML not "safe" (2)', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ content: '<p style="color: red;">Hello <a href="#nathan">Nathan</a></p>' });

        expect(updatePublication.status).toEqual(404);
    });

    test('Can update publication id', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ id: 'brand-new-id' });

        expect(updatePublication.body.id).toEqual('brand-new-id');
    });

    test('Can update publication licence', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ licence: 'CC_BY_ND' });

        expect(updatePublication.body.licence).toEqual('CC_BY_ND');
    });

    test('Cannot update publication with invalid licence enum', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ licence: 'INVALID' });

        expect(updatePublication.status).toEqual(422);
    });

    test('Cannot update publication with invalid update parameter', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-interpretation-draft')
            .query({ apiKey: 123456789 })
            .send({ doesNotExist: 'invalid-parameter' });

        expect(updatePublication.status).toEqual(422);
    });

    test('Cannot update LIVE publication', async () => {
        const updatePublication = await testUtils.agent
            .patch('/publications/publication-real-world-application-live')
            .query({ apiKey: 123456789 })
            .send({ title: 'Brand new title' });

        expect(updatePublication.status).toEqual(404);
    });
});
