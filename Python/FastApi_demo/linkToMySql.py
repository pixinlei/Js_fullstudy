# from sqlalchemy import create_engine


# engine = create_engine('mysql+pymysql://root:root@localhost:3306/test', echo=True)


# # 创建session类对象（建立和数据库的链接）
# SessionLocal = sessionmaker(
#     bind=engine,
#     autoflush=False,
#     autocommit=False
# )


import sys
sys.path.append("..")
from grammar_study import for_both

from typing import Text
from fastapi import Depends,FastAPI
# 首先应该安装fastapi，sqlalchemy
from sqlalchemy import Boolean, Column, Integer, String,DateTime
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

from sqlalchemy.sql.expression import true

# 格式为 'mysql+pymysql://账号名:密码@ip:port/数据库名'
SQLALCHEMY_DATABASE_URI:str = 'mysql+pymysql://root:root@localhost:3306/test'

# 生成一个SQLAlchemy引擎
engine = create_engine(SQLALCHEMY_DATABASE_URI,pool_pre_ping=True)
# 生成sessionlocal类，这个类的每一个实例都是一个数据库的会话
# 注意命名为SessionLocal，与sqlalchemy的session分隔开
SessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)
session = SessionLocal()

Base = declarative_base()
# Base是用来给模型类继承的，类似django中的models.Model

# 模型类，tablename指表名，如果数据库中没有这个表会自动创建，有表则会沿用
class users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    password = Column(String)
    username = Column(String)
    avator = Column(String)
    token = Column(String)
    nickname = Column(String)

Base.metadata.create_all(bind=engine)
# 此步也必不可少
app = FastAPI()
# 创建fastapi对象

@app.get("/list")
async def main():
    for_both.test()
    # 生成接口：127.0.0.1:8000/list
    order_list = []

    # order = session.query(users).filter(users.submit_time>datetime.datetime.now()-datetime.timedelta(days=3)).all()

    order = session.query(users).filter(users.nickname == '小明').all()
    # 除了查询，当然还有别的query方法，随着学习陆续更新
    session.close()
    for i in range(len(order)):
        order_list.append(
            {
                'id':order[i].id,
                'password':order[i].password,
                'username':order[i].username,
                'avator':order[i].avator,
                'token':order[i].token,
                'nickname':order[i].nickname,
            }
        )
    return order_list
    # 返回列表

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app,host="127.0.0.1",port=8000)
	# 让fastapi跑起来
