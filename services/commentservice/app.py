import os
from flask import Flask
from flask_graphql import GraphQLView
from graphql_schema import schema

app = Flask(__name__)

app.add_url_rule(
    '/comments',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
