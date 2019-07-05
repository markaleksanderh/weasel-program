from flask import Flask
from weasel import weasel
import json

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        output = weasel("hello world", 5, 5)
        return json.dumps(output)

    @app.errorhandler(404)
    def page_not_found(error):
        return "404 Page not found"
    return app