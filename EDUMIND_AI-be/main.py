from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
import models, schemas

# ✅ CREATE APP FIRST
app = FastAPI()

# ✅ ADD CORS AFTER APP
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ CREATE TABLES
Base.metadata.create_all(bind=engine)

# ✅ DB DEPENDENCY
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ✅ PASSWORD HASHING
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# =======================
# 🔐 REGISTER
# =======================
@app.post("/register")
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    try:
        print("Incoming:", user)

        # ✅ FORCE SAFE PASSWORD
        password = str(user.password)
        if len(password) > 72:
            password = password[:72]

        existing_user = db.query(models.User).filter(models.User.email == user.email).first()

        if existing_user:
            raise HTTPException(status_code=400, detail="Email already registered")

        hashed_password = pwd_context.hash(password)

        new_user = models.User(
            name=user.name,
            email=user.email,
            password=hashed_password
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {"message": "User registered successfully"}

    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))

# =======================
# 🔐 LOGIN
# =======================
@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # ✅ SAME FIX HERE
    password = str(user.password)
    if len(password) > 72:
        password = password[:72]

    if not pwd_context.verify(password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    return {
        "message": "Login successful",
        "user_id": db_user.id,
        "name": db_user.name
    }
# =======================
# 👤 PROFILE
# =======================
@app.post("/profile")
def save_profile(profile: schemas.ProfileCreate, db: Session = Depends(get_db)):
    new_profile = models.Profile(
        user_id=profile.user_id,
        class_name=profile.class_name,
        board=profile.board,
        strengths=profile.strengths,
        weaknesses=profile.weaknesses,
        daily_hours=profile.daily_hours
    )

    db.add(new_profile)
    db.commit()

    return {"message": "Profile saved successfully"}
@app.get("/exams")
def get_exams(db: Session = Depends(get_db)):
    exams = db.query(models.Exam).all()
    return exams