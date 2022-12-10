from flask import Flask
from app.config.database import db
from app.config import config
from app.config.config import CONNECTION_STRING

from app.controllers.blog_controller import BLOG_BLUEPRINT

def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = CONNECTION_STRING
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)    
    app.register_blueprint(BLOG_BLUEPRINT)
    return app 

if __name__ == '__main__':
    app = create_app()
    app.run(port=config.SERVER_PORT)
    