import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { pool } from '../data/database';
import { User } from '../data';

export class UsersRepository implements IRepository<User>  {

    public async findAll(): Promise<User[]> {
        const repository: Repository<User> = getRepository(User);
        return repository.find();
    }

    public async getUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM blog_user ORDER BY user_uuid ASC', (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows)
            })
        })
    }

}