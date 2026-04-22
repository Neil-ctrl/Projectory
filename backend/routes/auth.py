from fastapi import APIRouter
from psycopg2.extras import RealDictCursor

from db import get_db_connection
from schemas import LoginRequest, RegisterRequest

router = APIRouter()

@router.post("/login")
def login(user_data: LoginRequest):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    try:
        cur.execute(
            "SELECT id, email, password, role, name FROM userauth WHERE email = %s",
            (user_data.email,)
        )
        user = cur.fetchone()

        if user and user["password"] == user_data.password:
            return {
                "message": "Login successful",
                "user_id": user["id"],
                "role": user["role"],
                "name": user["name"]
            }

        return {"message": "Wrong Credentials"}

    finally:
        cur.close()
        conn.close()


@router.post("/register")
def register(user_data: RegisterRequest):
    conn = get_db_connection()
    cur = conn.cursor()

    try:
        cur.execute(
            "SELECT id FROM userauth WHERE email = %s",
            (user_data.email,)
        )
        if cur.fetchone():
            return {"message": "User already exists"}


        cur.execute(
            """
            INSERT INTO userauth (name, email, role, password)
            VALUES (%s, %s, %s, %s)
            RETURNING id
            """,
            (user_data.name, user_data.email, user_data.role, user_data.password)
        )

        user_id = cur.fetchone()[0]
        conn.commit()

        return {
            "message": "Registration successful",
            "user_id": user_id
        }

    except Exception as e:
        conn.rollback()
        print("Error:", e)
        return {"message": "Server error"}

    finally:
        cur.close()
        conn.close()