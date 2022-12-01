import express, { Request, Response, Router, NextFunction } from 'express';
import { CommentsController } from '../controllers';
import { CommentsRepository } from '../repositories';

const router: Router = express.Router();
const controller: CommentsController = new CommentsController(new CommentsRepository());

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    await controller.getComments(req, res, next);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    await controller.getCommentById(req, res, next);
});

export const commentsRouter: Router = router;