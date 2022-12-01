import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
    @Column({ unique: true })
    public user_uuid: string;

    @Column()
    public nickname: string;

    @Column()
    public email: string;

    @Column()
    public password_md5_hash: string;

    @Column()
    public signature: string;

    @Column()
    public registered_at: string;

    public constructor(
        user_uuid: string,
        nickname: string,
        email: string,
        password_md5_hash: string,
        signature: string,
        registered_at: string,
    ) {
        super();
        this.user_uuid = user_uuid;
        this.nickname = nickname;
        this.email = email;
        this.password_md5_hash = password_md5_hash;
        this.signature = signature;
        this.registered_at = registered_at;
    }


}