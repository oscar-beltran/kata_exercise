import datetime
import pytest
from server import create_app
from app.models.comment_model import CommentModel

@pytest.fixture()
def app_mock():
    app_mock = create_app()
    app_mock.config.update({
        'TESTING': True,
    }) 
    return app_mock

@pytest.fixture()
def mock_comment_model():
    comment_model = CommentModel(
        comment_uuid = '3e40d79f-9ae1-47b9-987c-3c7ecb0fd915',
        post_uuid = '',
        content = '',
        published = False,
        created_at = datetime.datetime.now(),
        published_at = datetime.datetime.now()
    )
    return comment_model

@pytest.fixture()
def mock_get_sqlalchemy(mocker):
    mock = mocker.patch('flask_sqlalchemy.model._QueryProperty.__get__').return_value = mocker.Mock()
    return mock