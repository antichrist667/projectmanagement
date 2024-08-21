from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Comment(Base):
    __tablename__ = 'comments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    id_proyect = Column(Integer, nullable=False)
    content = Column(String(500), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
