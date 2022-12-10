from app.config.database import db
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

class CommentModel(db.Model):

    __tablename__ = 'post_comment'

    comment_uuid = db.Column(db.String, primary_key = True)
    post_uuid = db.Column(db.String)
    content = db.Column(db.String)
    published = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime)
    published_at = db.Column(db.DateTime)
    
    def __init__(self, comment_uuid, post_uuid, content, published, created_at, published_at):
        self.comment_uuid = comment_uuid
        self.post_uuid = post_uuid
        self.content = content
        self.published = published
        self.created_at = created_at
        self.published_at = published_at

    def __repr__(self):
        return f"<Comment {self.content}>"

class CommentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CommentModel
        include_relationships = True
        loas_instance = True
