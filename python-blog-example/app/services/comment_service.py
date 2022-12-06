
from app.models.comment_model import CommentModel, CommentSchema
from flask import jsonify

class CommentService:

    def __init__(self):
        return None

    def comment_jsonify(self, query_result):
        return jsonify(CommentSchema().dump(query_result, many=True))

    def get_all(self):
        query_result = CommentModel.query.all()
        return self.comment_jsonify(query_result)

    