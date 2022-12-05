import express, { Router } from 'express';
import { usersRouter } from './user.router';
import { commentsRouter } from './comment.router';
import { tagsRouter } from './tag.router';

const router: Router = express.Router();

router.use('/blog/health', (req, res) => {
    res.status(200).send('OK');
});
router.use('/blog/users', usersRouter);
router.use('/blog/comments', commentsRouter);
router.use('/blog/tags', tagsRouter);

export const applicationRouter: Router = router;