import express, { Request, Response, Router, NextFunction } from 'express';
import { TagsController } from '../controllers';
import { TagsRepository } from '../repositories';

const router: Router = express.Router();
const controller: TagsController = new TagsController(new TagsRepository());

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    await controller.getTags(req, res, next);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.rquuid){
        res.status(400).send('Bad Request, missing rqUuid header')
        return
    }
    await controller.getTagById(req, res, next);
});

export const tagsRouter: Router = router;