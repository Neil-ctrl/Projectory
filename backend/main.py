from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI()

class LoginRequest(BaseModel):
    email: str
    password: str

users = [
    {
        "id": 1,
        "email": "prof@uni.edu",
        "name": "Professor Smith",
        "role": "professor",
        "password": "prof123"
    },
    {
        "id": 2,
        "email": "student@uni.edu",
        "name": "John Student",
        "role": "student",
        "password": "student123"
    }
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}


@app.post("/api/login")
def login(user_data: LoginRequest):
    print(f"Login attempt for email: {user_data.email}")
    print(f"Password received: {user_data.password}")

    for user in users:
        if user["email"] == user_data.email and user["password"] == user_data.password:
            return {"message": "Login successful", "user_id": user["id"]}
    return {"message": "Wrong Credentials"}