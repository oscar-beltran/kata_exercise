import { Request, Response, NextFunction } from 'express';
import { CommentsRepository } from '../repositories';
import { Comment } from '../data';
import { CommentModel } from '../models';

export class CommentsController {

    private repository: CommentsRepository;

    constructor(_repository: CommentsRepository) {
        this.repository = _repository;
    }

    public async getComments(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const comments: Comment[] = await this.repository.getComments();
            const _comments = comments.map((comment) => {
                return new CommentModel(
                    comment.comment_uuid,
                    comment.post_uuid,
                    comment.content,
                    comment.published,
                    comment.created_at
                )
            })
            res.status(200).json(_comments);
        } catch (error) {
            next(error);
        }
    }

}