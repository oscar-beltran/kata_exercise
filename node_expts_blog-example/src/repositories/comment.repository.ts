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
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post_comment ORDER BY post_uuid ASC', (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows)
            })
        })
    }

}