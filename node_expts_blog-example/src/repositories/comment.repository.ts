import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { pool } from '../data/database';
import { Comment } from '../data';

export class CommentsRepository implements IRepository<Comment>  {

    public async findAll(): Promise<Comment[]> {
        const repository: Repository<Comment> = getRepository(Comment);
        return repository.find();
    }

    public async getComments(): Promise<Comment[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const results : any =  await pool.query('SELECT * FROM post_comment ORDER BY post_uuid ASC');
                resolve(results.rows);
            } catch (error) {
                reject(error);
            }
        })
    }

}