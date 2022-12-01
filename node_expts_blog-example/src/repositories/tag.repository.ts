import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { pool } from '../data/database';
import { Tag } from '../data';

export class TagsRepository implements IRepository<Tag>  {

    public async findAll(): Promise<Tag[]> {
        const repository: Repository<Tag> = getRepository(Tag);
        return repository.find();
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

}