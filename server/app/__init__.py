from flask import Flask
from flask_cors import CORS
from weasel import weasel
from random import randint
import json

def create_app():
    app = Flask(__name__)
    CORS(app)
    @app.route('/')
    def index():
        number = randint(0,100)
        # output = weasel("hello world", 5, 5)
        # return json.dumps(output)
        return json.dumps(number)

    @app.errorhandler(404)
    def page_not_found(error):
        return "404 Page not found"
    return app