from flask import Flask, render_template, send_from_directory, request, session
from config import SECRET_KEY, DEBUG
from template_name import get_template_name 
import os

# 创建Flask应用
app = Flask(__name__)

# 使用配置
app.config['SECRET_KEY'] = SECRET_KEY
app.config['DEBUG'] = DEBUG

@app.route('/')
def index():
    template_name = get_template_name()
    return render_template(template_name + '.html')

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

@app.route('/img/<path:path>')
def send_static_image(path):
    return send_from_directory(os.path.join(app.static_folder, get_template_name(), 'img'), path)

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500