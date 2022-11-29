class Tag{
    constructor(id, key, description){
        this.id = parseInt(id)
        this.key = key
        this.description = description
    }

    getId(){
        return this.id
    }

    getKey(){
        return this.key
    }

    getDescription(){
        return this.description
    }
}

module.exports = Tag