from fastapi import FastAPI
from .database import engine, Base
from . import models

app = FastAPI(title="The Loop: Thai Cabinet Power Graph")

# Create tables
models.Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Welcome to The Loop API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
