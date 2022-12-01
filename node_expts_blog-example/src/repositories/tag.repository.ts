import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { pool } from '../data/database';
import { Tag } from '../data';

export class TagsRepository implements IRepository<Tag>  {

    public async findAll(): Promise<Tag[]> {
        const repository: Repository<Tag> = getRepository(Tag);
        return repository.find();
    }

    public async healthCheck(): Promise<boolean> {
        return true;
    }

    public async getTags(): Promise<Tag[]> {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM tag ORDER BY id ASC', (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows)
            })
        })
    }

    public async getTagById(id: string): Promise<Tag> {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM tag WHERE id = $1 ', [id], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows.pop())
            })
        })
    }

}