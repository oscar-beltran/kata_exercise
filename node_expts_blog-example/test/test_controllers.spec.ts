import request from 'supertest';
import express from 'express';
import { applicationRouter } from '../src/routes/application.router';
import { pool } from '../src/data/database';


describe('testing index file', () => {
    test('empty string should result in zero', () => {
        expect(0).toBe(0);
    });
});


describe('test User Controller', () => {
    const app = express();

    beforeAll(async () => {
        app.use(applicationRouter);
    });

    afterAll((done) => {
        pool.end(); // close the connection pool
        done();
    });

    test('test get users', async() => {
        const res = await request(app).get('/blog/users').set({ rquuid: 123456 });
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    });

    test('test get comments', async() => {
        const res = await request(app).get('/blog/comments').set({ rquuid: 123456 });
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    });

    test('test get tags', async() => {
        const res = await request(app).get('/blog/tags').set({ rquuid: 123456 });
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    });

});
