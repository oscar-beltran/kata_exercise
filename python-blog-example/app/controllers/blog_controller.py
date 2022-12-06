from flask import Blueprint
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
    return comment_service.get_all()

@BLOG_BLUEPRINT.route('/blog/tags', methods=['GET'])
def get_tags():
    return tag_service.get_all()

@BLOG_BLUEPRINT.route('/blog/users', methods=['GET'])
def get_users():
    return user_service.get_all()
