
from app.models.user_model import UserModel, UserSchema
from flask import jsonify
from app.utilities.utilities import configure_logging

class UserService:

    log = configure_logging(__name__)

    def __init__(self):
        return None

    def user_jsonify(self, query_result):
        return jsonify(UserSchema().dump(query_result, many=True))

    def get_all(self, rq_uuid):
        self.log.info('[%s] Getting all users', rq_uuid)
        query_result = UserModel.query.all()
        return self.user_jsonify(query_result)
