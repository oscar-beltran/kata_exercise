import json

def test_health_resource(app_mock):
    response = app_mock.test_client().get("/blog/health")
    assert response.status_code == 200
    assert response.data.decode('utf-8') == 'OK'


def test_comments_resource(app_mock, 
    mock_get_sqlalchemy,
    mock_comment_model    
):
    mock_get_sqlalchemy.all.return_value = [mock_comment_model]
    response = app_mock.test_client().get("/blog/comments")
    response_load = json.loads(response.data.decode('utf-8'))
    assert response.status_code == 200
    assert response_load[0]['comment_uuid'] == '3e40d79f-9ae1-47b9-987c-3c7ecb0fd915'