from pydantic import BaseModel
class UserCreate(BaseModel):
    name: str
    email: str
    password: str
class ProfileCreate(BaseModel):
    user_id: int
    class_name: str
    board: str
    strengths: str
    weaknesses: str
    daily_hours: int
