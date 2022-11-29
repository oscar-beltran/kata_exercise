class User{
    constructor(userUuid, nickname, email, passwordMd5Hash, signature, registeredAt){
        this.userUuid = userUuid
        this.nickname = nickname
        this.email = email
        this.passwordMd5Hash = passwordMd5Hash
        this.signature = signature
        this.registeredAt = registeredAt
    }

    getUUID(){
        return this.userUuid
    }

    getNickname(){
        return this.nickname
    }

    getEmail(){
        return this.email
    }

    getPasswordMd5Hash(){
        return this.passwordMd5Hash
    }

    getSignature(){
        return this.signature
    }

    getRegisteredAt(){
        return this.registeredAt
    }
}

module.exports = User