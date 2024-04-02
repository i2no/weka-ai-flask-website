from flask import request, session, abort
from invoke_cloud_function import invoke_cloud_function
from redis_operations import query_template_from_redis, update_redis
import json

def query_template_from_db(domain):
    '''查询数据库中该域名对应的模板名称'''
    # 调用微信云函数，查询数据库
    result = invoke_cloud_function('aiWebsiteFunctions', {
        "method": "getWebsiteByDomain",
        'domain': domain
    })
    # 将结果转换为字典
    result = result.json()
    # 若调用失败，则抛出异常
    if (result.get('errcode') != 0):
        abort(500)
    # 若有结果，则返回模板名称
    resp_data_json_str = result.get('resp_data')
    resp_data = json.loads(resp_data_json_str)
    if (len(resp_data) > 0):
        template_name = resp_data[0].get('template_name')
        return template_name
    # 若无，则返回404
    abort(404)

def get_template_name():
    '''获取模板名称'''
    # 获取当前域名
    current_domain = request.host
    print('current_domain:', current_domain)
    # 从会话中获取template_name
    if 'template_name' in session:
        print('get template_name from session:', session['template_name'])
        return session['template_name']
    # 查询redis中该域名对应的模板名称
    template_name = query_template_from_redis(current_domain)
    print('get template_name from redis:', template_name)
    template_name = None
    # 若无，则查询数据库
    if template_name is None:
        template_name = query_template_from_db(current_domain)
        print('get template_name from db:', template_name)
        # 若有，则更新redis
        if template_name is not None:
            update_redis(current_domain, template_name)
            print('update redis:', current_domain, template_name)
    # 若无，则使用默认模板
    if template_name is None:
        template_name = 'template-1'
        print('use default template:', template_name)
    # 将模板名称存入会话中
    session['template_name'] = template_name
    print('set template_name to session:', template_name)
    return template_name