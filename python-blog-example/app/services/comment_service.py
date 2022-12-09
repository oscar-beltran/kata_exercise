
from app.models.comment_model import CommentModel, CommentSchema
from flask import jsonify
from app.utilities.utilities import configure_logging


class CommentService:

    log = configure_logging(__name__)

    def __init__(self):
        return None

    def comment_jsonify(self, query_result):
        return jsonify(CommentSchema().dump(query_result, many=True))

    def get_all(self, rq_uuid):
        self.log.info('[%s] Getting all comments', rq_uuid)
        query_result = CommentModel.query.all()
        return self.comment_jsonify(query_result)

    