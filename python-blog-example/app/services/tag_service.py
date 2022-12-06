
from app.models.tag_model import TagModel, TagSchema
from flask import jsonify

class TagService:

    def __init__(self):
        return None

    def tag_jsonify(self, query_result):
        return jsonify(TagSchema().dump(query_result, many=True))

    def get_all(self):
        query_result = TagModel.query.all()
        return self.tag_jsonify(query_result)
