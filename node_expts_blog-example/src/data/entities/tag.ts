import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Tag extends BaseEntity {
    @Column({ unique: true })
    public id: number;

    @Column()
    public key: string;

    @Column()
    public description: string;

    public constructor(
        id: number,
        key: string,
        description: string,
    ) {
        super();
        this.id = id;
        this.key = key;
        this.description = description;
    }


}