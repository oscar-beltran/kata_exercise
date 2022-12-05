export class CommentModel {
    constructor(
        public commentUuid: string, 
        public postUuid: string, 
        public content: string,
        public published: boolean,
        public createdAt: string,
    ) {}
}