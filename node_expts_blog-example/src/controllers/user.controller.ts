import { Request, Response, NextFunction } from 'express';
import { UsersRepository } from '../repositories';
import { User } from '../data';
import { UserModel } from '../models';

export class UsersController {

    private repository: UsersRepository;

    constructor(_repository: UsersRepository) {
        this.repository = _repository;
    }

    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users: User[] = await this.repository.getUsers();
            const _users = users.map((user) => {
                return new UserModel(
                    user.user_uuid,
                    user.nickname,
                    user.email,
                    user.password_md5_hash,
                    user.signature,
                    user.registered_at,
                )
            })
            res.status(200).json(_users);
        } catch (error) {
            next(error);
        }
    }

}