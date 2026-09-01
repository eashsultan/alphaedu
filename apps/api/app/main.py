from fastapi import FastAPI

app = FastAPI(title="AlphaEdu API")

@app.get("/health")
def health_check():
    return {"status": "ok"}
