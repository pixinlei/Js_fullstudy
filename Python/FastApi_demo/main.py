from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get('/')
async def root():
    return {'message':'hello world!'}

@app.get('/test')
async def test(id:int):
    return {id}

if __name__ == "__main__":
    uvicorn.run(app='main:app',host='127.0.0.1',port=8765,reload=True,debug=True)