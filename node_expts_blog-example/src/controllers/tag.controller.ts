import { Request, Response, NextFunction } from 'express';
import { TagsRepository } from '../repositories';
import { Tag } from '../data';
import { TagModel } from '../models';

export class TagsController {

    private repository: TagsRepository;

    constructor(_repository: TagsRepository) {
        this.repository = _repository;
    }

    public async getTags(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const tags: Tag[] = await this.repository.getTags();
            const _tags = tags.map((tag) => {
                return new TagModel(
                    parseInt(tag.id.toString()),
                    tag.key,
                    tag.description,
                )
            })
            res.status(200).json(_tags);
        } catch (error) {
            next(error);
        }
    }

    public async getTagById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id: string = req.params.id;
            const tag: Tag = await this.repository.getTagById(id);
            const _tag = new TagModel(
                    parseInt(tag.id.toString()),
                    tag.key,
                    tag.description,
                )
            res.status(200).json(_tag);
        } catch (error) {
            next(error);
        }
    }


}