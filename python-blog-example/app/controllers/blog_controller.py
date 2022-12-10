from flask import Blueprint
from flask import request
from flask import Response
import json
from app.services.comment_service import CommentService
from app.services.tag_service import TagService
from app.services.user_service import UserService

BLOG_BLUEPRINT = Blueprint('blog', __name__)

comment_service = CommentService()
tag_service = TagService()
user_service = UserService()

@BLOG_BLUEPRINT.route('/blog/health', methods=['GET'])
def health():
    return "OK"

@BLOG_BLUEPRINT.route('/blog/comments', methods=['GET'])
def get_comments():
    rq_uuid = request.headers.get('rqUuid')
    validation_result = validate_header(rq_uuid)
    if validation_result is not None:
        return validation_result
    try:
        return comment_service.get_all(rq_uuid)
    except Exception as error:
        return general_error(error)
        

@BLOG_BLUEPRINT.route('/blog/tags', methods=['GET'])
def get_tags():
    rq_uuid = request.headers.get('rqUuid')
    validation_result = validate_header(rq_uuid)
    if validation_result is not None:
        return validation_result
    try:
        return tag_service.get_all(rq_uuid)
    except Exception as error:
        return general_error(error)

@BLOG_BLUEPRINT.route('/blog/users', methods=['GET'])
def get_users():
    rq_uuid = request.headers.get('rqUuid')
    validation_result = validate_header(rq_uuid)
    if validation_result is not None:
        return validation_result
    try:
        return user_service.get_all(rq_uuid)
    except Exception as error:
        return general_error(error)
    

def validate_header(rq_uuid: str):
    if rq_uuid is None:
        res = Response(json.dumps(
            {'Message': 'rqUuid header is required'}), mimetype='application/json')
        res.status_code = 400
        return res
    else:        
        return None

def general_error(error: Exception):
    result_json = {'message': str(error), 'status': 500}
    res = Response(json.dumps(result_json), mimetype='application/json')
    res.status_code = 500
    return res