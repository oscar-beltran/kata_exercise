from app.config.database import db
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

class UserModel(db.Model):

    __tablename__ = 'blog_user'

    user_uuid = db.Column(db.String, primary_key = True)
    nickname = db.Column(db.String)
    email = db.Column(db.String)
    password_md5_hash = db.Column(db.String)
    signature = db.Column(db.String)
    registered_at = db.Column(db.String)
    
    def __init__(self, user_uuid, nickname, email, password_md5_hash, signature, registered_at):
        self.user_uuid = user_uuid
        self.nickname = nickname
        self.email = email
        self.password_md5_hash = password_md5_hash
        self.signature = signature
        self.registered_at = registered_at

    def __repr__(self):
        return f"<User {self.nickname}>"

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = UserModel
        include_relationships = True
        loas_instance = True
