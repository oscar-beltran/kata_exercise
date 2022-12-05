import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Comment extends BaseEntity {
    @Column({ unique: true })
    public comment_uuid: string;

    @Column()
    public post_uuid: string;

    @Column()
    public content: string;

    @Column()
    public published: boolean;

    @Column()
    public created_at: string;

    public constructor(
        comment_uuid: string,
        post_uuid: string,
        content: string,
        published: boolean,
        created_at: string,
    ) {
        super();
        this.comment_uuid = comment_uuid;
        this.post_uuid = post_uuid;
        this.content = content;
        this.published = published;
        this.created_at = created_at;
    }


}