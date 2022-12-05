import request from 'supertest';
import express from 'express';
import { applicationRouter } from '../src/routes/application.router';
import { pool } from '../src/data/database';
//import sinon from 'sinon';
import pgClient from 'pg';
import HTTP_STATUS_CODES from 'http-status';

describe('testing index file', () => {
    test('empty string should result in zero', () => {
        expect(0).toBe(0);
    });
});


describe('test User Controller', () => {
    const app = express();
    //const sinon = require('sinon');

    beforeAll(async () => {
        app.use(applicationRouter);
    });

    beforeEach(() => {
        
    });

    afterEach(() => {
        //sinon.restore();
    });

    afterAll((done) => {
        pool.end(); // close the connection pool
        jest.resetAllMocks();
        done();
    });

    test('test get users', async() => {

        (pool as any).connect = jest.fn().mockReturnThis();
        (pool as any).query = jest.fn().mockReturnThis();
        (pool as any).release = jest.fn().mockReturnThis();
        (pool as any).query.mockResolvedValueOnce({
            rows: [
                {
                    "user_uuid": "08139f8c-0a07-4064-bb2c-0ee3a9655736",
                    "nickname": "pepe",
                    "email": "pepe@mail.com",
                    "password_md5_hash": "bf414173786628b193822d4e9d36fa55",
                    "signature": "holis",
                    "registered_at": "2022-11-29T20:34:04.814Z"
                }
            ],
        });
        
        const res = await request(app).get('/blog/users').set({ rquuid: 123456 });
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    });

    test('test get comments', async() => {

        (pool as any).connect = jest.fn().mockReturnThis();
        (pool as any).query = jest.fn().mockReturnThis();
        (pool as any).release = jest.fn().mockReturnThis();
        (pool as any).query.mockResolvedValueOnce({
            rows: [
                {
                    "comment_uuid": "3ec919a3-e14a-44d9-b20e-4a3f4bca060c",
                    "post_uuid": "25c0a9ab-013b-4093-b1b0-1e2d72fb9d9b",
                    "content": "Vaya, qué interesante composición literaria",
                    "published": true,
                    "created_at": "2022-11-29T20:34:04.824Z"
                }
            ],
        });
        const res = await request(app).get('/blog/comments').set({ rquuid: 123456 });
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    });

    test('test get tags', async() => {

        (pool as any).connect = jest.fn().mockReturnThis();
        (pool as any).query = jest.fn().mockReturnThis();
        (pool as any).release = jest.fn().mockReturnThis();
        (pool as any).query.mockResolvedValueOnce({
            rows: [
                {
                    "id": 1,
                    "key": "REVIEW",
                    "description": "Reseñas de temas varios"
                }
            ],
        });

        const res = await request(app).get('/blog/tags').set({ rquuid: 123456 });
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    });

});
