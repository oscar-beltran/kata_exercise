import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { pool } from '../data/database';
import { User } from '../data';

export class UsersRepository implements IRepository<User>  {

    public async findAll(): Promise<User[]> {
        const repository: Repository<User> = getRepository(User);
        return repository.find();
    }

    public async healthCheck(): Promise<boolean> {
        return true;
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

    public async getUserById(id: string): Promise<User> {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM blog_user WHERE user_uuid = $1 ', [id], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows.pop())
            })
        })
    }

}