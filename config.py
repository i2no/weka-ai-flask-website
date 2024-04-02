import os
from dotenv import load_dotenv, find_dotenv

# 从.env文件中加载环境变量
if (find_dotenv()):
    load_dotenv(find_dotenv())

# 设置密钥
SECRET_KEY = os.environ.get('SECRET_KEY')

# 设置调试模式
is_debug = os.environ.get('FLASK_DEBUG', False) == 'True'
DEBUG = is_debug