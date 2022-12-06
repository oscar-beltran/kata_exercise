import datetime
import pytest
from server import create_app
from app.models.comment_model import CommentModel
from app.models.user_model import UserModel
from app.models.tag_model import TagModel

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
        post_uuid = '31b16177-4944-493b-a9a6-f18b167a9912',
        content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nunc accumsan consequat rutrum, ante metus finibus ligula, eu rutrum mauris orci nec libero',
        published = False,
        created_at = datetime.datetime.now(),
        published_at = None
    )
    return comment_model

@pytest.fixture()
def mock_user_model():
    user_model = UserModel(
        user_uuid = '7d879574-aadd-4aff-98a9-1c8e743fb8eb',
        nickname = 'test',
        email = 'test@mail.com',
        password_md5_hash = 'df30cb178eb8e37728f39b3e6551c8de',
        signature = '=^_^=',
        registered_at = datetime.datetime.now()
    )
    return user_model

@pytest.fixture()
def mock_tag_model():
    tag_model = TagModel(
        id = 1,
        key = 'TEST',
        description = 'Test tag'
    )
    return tag_model

@pytest.fixture()
def mock_get_sqlalchemy(mocker):
    mock = mocker.patch('flask_sqlalchemy.model._QueryProperty.__get__').return_value = mocker.Mock()
    return mock