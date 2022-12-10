from app.config.database import db
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

class TagModel(db.Model):

    __tablename__ = 'tag'

    id = db.Column(db.BigInteger, primary_key = True)
    key = db.Column(db.String)
    description = db.Column(db.String)
    
    def __init__(self, id, key, description):
        self.id = id
        self.key = key
        self.description = description

    def __repr__(self):
        return f"<Tag {self.key}>"

class TagSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = TagModel
        include_relationships = True
        loas_instance = True
