import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from dotenv import load_dotenv

load_dotenv()

MYSQL_HOST = os.getenv("COMMENT_MYSQL_HOST")
MYSQL_DATABASE = os.getenv("COMMENT_MYSQL_DBNAME")
MYSQL_USER = os.getenv("COMMENT_MYSQL_USER")
MYSQL_PASSWORD = os.getenv("COMMENT_MYSQL_PASSWORD")

DATABASE_URL = f"mysql+mysqlconnector://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}/{MYSQL_DATABASE}"

engine = create_engine(DATABASE_URL)
session_factory = sessionmaker(autocommit=False, autoflush=False, bind=engine)
SessionLocal = scoped_session(session_factory)  # Usamos scoped_session
