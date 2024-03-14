from flask import Flask, render_template, send_from_directory, request, session
from dotenv import load_dotenv, find_dotenv
import os

# 从.env文件中加载环境变量
load_dotenv(find_dotenv())

# 创建Flask应用
app = Flask(__name__)

# 设置密钥
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# 获取模板名称
def get_template_name():
    # 从会话中获取template_name
    if 'template_name' in session:
        return session['template_name']
    # 获取当前域名
    current_domain = request.host
    if "app1.local" in current_domain:
        template_name = 'template-1'
    elif "app2.local" in current_domain:
        template_name = 'template-2'
    else:
        template_name = 'template-1'
    # 将template_name存入会话中
    session['template_name'] = template_name
    return template_name

@app.route('/')
def index():
    return render_template(get_template_name() + '.html')

@app.route('/<path:path>')
def others(path):
    return render_template(get_template_name() + '.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.static_folder, get_template_name()), 'favicon.ico')

@app.route('/js/<path:path>')
def send_static_js(path):
    return send_from_directory(os.path.join(app.static_folder, get_template_name(), 'js'), path)

@app.route('/css/<path:path>')
def send_static_css(path):
    return send_from_directory(os.path.join(app.static_folder, get_template_name(), 'css'), path)

# 运行Flask应用
if __name__ == '__main__':
    app.run(debug=True)