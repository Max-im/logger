import { describe, expect, test } from '@jest/globals';
import supertest from 'supertest';
import serverBuilder from '../../../server';

const app = serverBuilder({ logger: false });

// @ts-ignore
afterAll(() => app.close());

describe('status requests', () => {

    test('status request', async () => {
        await app.ready();

        const response = await supertest(app.server)
            .get('/api/v1/status/')
            .send()
            .expect(200);

        console.log(response.body, '============================');
        expect(response.body).toEqual({ staus: 'up' });
    });
});
