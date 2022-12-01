import {Request, Response} from 'express';
import { pool } from '../data/database';
import { QueryResult } from 'pg';


export const getUsers = async (rep: Request, res: Response): Promise<Response> => {
    try {
        const response : QueryResult = await pool.query('SELECT * FROM blog_user ORDER BY user_uuid ASC');
        return res.status(200).json(response.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal server error');
    }
}

export const getUserById = async (rep: Request, res: Response): Promise<Response> => {
    try {
        const id = rep.params.id;
        const response : QueryResult = await pool.query('SELECT * FROM blog_user WHERE user_uuid = $1 ', [id]);
        return res.status(200).json(response.rows.pop());
    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal server error');
    }
}

export const getComments = async (rep: Request, res: Response): Promise<Response> => {
    try {
        const response : QueryResult = await pool.query('SELECT * FROM post_comment ORDER BY post_uuid ASC');
        return res.status(200).json(response.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal server error');
    }
}

export const getTags = async (rep: Request, res: Response): Promise<Response> => {
    try {
        const response : QueryResult = await pool.query('SELECT * FROM post_tag ORDER BY post_uuid ASC');
        return res.status(200).json(response.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal server error');
    }
}