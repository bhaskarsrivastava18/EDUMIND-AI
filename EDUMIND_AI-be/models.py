from sqlalchemy import Column, Integer, String, Text, ForeignKey
from database import Base
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
class Profile(Base):
    __tablename__ = "profiles"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    class_name = Column(String)
    board = Column(String)
    strengths = Column(Text)
    weaknesses = Column(Text)
    daily_hours = Column(Integer)
class Exam(Base):
    __tablename__ = "exams"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    eligibility = Column(String)
    category = Column(String)
