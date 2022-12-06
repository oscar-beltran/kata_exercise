
from app.models.user_model import UserModel, UserSchema
from flask import jsonify

class UserService:

    def __init__(self):
        return None

    def user_jsonify(self, query_result):
        return jsonify(UserSchema().dump(query_result, many=True))

    def get_all(self):
        query_result = UserModel.query.all()
        return self.user_jsonify(query_result)
