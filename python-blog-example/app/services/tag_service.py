
from app.models.tag_model import TagModel, TagSchema
from flask import jsonify
from app.utilities.utilities import configure_logging


class TagService:

    log = configure_logging(__name__)

    def __init__(self):
        return None

    def tag_jsonify(self, query_result):
        return jsonify(TagSchema().dump(query_result, many=True))

    def get_all(self, rq_uuid):
        self.log.info('[%s] Getting all tags', rq_uuid)
        query_result = TagModel.query.all()
        return self.tag_jsonify(query_result)
