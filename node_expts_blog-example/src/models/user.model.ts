export class UserModel {
    constructor(
        public userUuid: string, 
        public nickname: string, 
        public email: string,
        public passwordMd5Hash: string,
        public signature: string,
        public registeredAt: string,
    ) {}

}