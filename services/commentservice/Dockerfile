FROM python:3.11-slim

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir aniso8601==7.0.0 \
    anyio==4.4.0 \
    blinker==1.8.2 \
    click==8.1.7 \
    colorama==0.4.6 \
    et-xmlfile==1.1.0 \
    Flask==3.0.3 \
    Flask-GraphQL==2.0.1 \
    graphene==2.1.9 \
    graphene-file-upload==1.3.0 \
    graphene-sqlalchemy==2.3.0 \
    graphql-core==2.2.1 \
    graphql-relay==2.0.1 \
    graphql-server-core==1.1.3 \
    greenlet==3.0.3 \
    idna==3.7 \
    itsdangerous==2.2.0 \
    Jinja2==3.1.4 \
    MarkupSafe==2.1.5 \
    mysql-connector-python==9.0.0 \
    numpy==1.24.1 \
    openpyxl==3.0.10 \
    pandas==1.5.3 \
    promise==2.3 \
    python-dateutil==2.8.2 \
    python-dotenv==1.0.1 \
    pytz==2022.7.1 \
    Rx==1.6.3 \
    singledispatch==3.7.0 \
    six==1.16.0 \
    sniffio==1.3.1 \
    SQLAlchemy==1.4.53 \
    starlette==0.38.2 \
    typing_extensions==4.12.2 \
    Werkzeug==3.0.3 \
    flask-cors==4.0.1  

EXPOSE 8080

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host=0.0.0.0", "--port=8080"]
