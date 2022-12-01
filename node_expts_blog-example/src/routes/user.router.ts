import express, { Request, Response, Router, NextFunction } from 'express';
import { UsersController } from '../controllers';
import { UsersRepository } from '../repositories';

const router: Router = express.Router();
const controller: UsersController = new UsersController(new UsersRepository());

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    await controller.getUsers(req, res, next);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    await controller.getUserById(req, res, next);
});

export const usersRouter: Router = router;