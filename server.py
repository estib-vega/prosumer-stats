"""
server.py
"""

from flask import Flask
from flask_restful import Resource, Api, reqparse

from parser import get_from_url


app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('link')

class LinkScraper(Resource):
    def post(self):
        args = parser.parse_args()
        link = args['link']
        views, likes, dislikes = get_from_url(link)
        return {"views": views, "likes": likes, "dislikes": dislikes}, 201

api.add_resource(LinkScraper, '/api/link')


if __name__ == "__main__":
    app.run(debug=True)