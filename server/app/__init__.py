from flask import Flask
from weasel import weasel

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        output = weasel("hello world", 5, 5)
        for o in output:
            print(o)
        return "output"

    @app.errorhandler(404)
    def page_not_found(error):
        return "404 Page not found"
    return app