import redis
import os

def get_redis_connection():
    '''获取redis连接'''
    r = redis.StrictRedis(
        host=os.environ.get('REDIS_HOST'), 
        port=os.environ.get('REDIS_PORT'),
        db=os.environ.get('REDIS_DB'))
    return r

def update_redis(domain, template_name):
    '''更新redis中该域名对应的模板名称'''
    # 连接redis服务
    r = get_redis_connection()
    # 更新模板名称
    r.set(domain, template_name)

def query_template_from_redis(domain):
    '''查询redis中该域名对应的模板名称'''
    # 连接redis服务
    r = get_redis_connection()
    # 查询模板名称
    template_name = r.get(domain)
    return template_name.decode('utf-8') if template_name else None