import requests
import json
import os
    
def invoke_cloud_function(function_name, params):
    """
    调用微信云函数。

    参数:
    function_name (str): 云函数名称。
    params (dict): 云函数参数。

    返回:
    response (requests.Response): 请求响应对象。
    """
    print("=== invoke_cloud_function START ===")
    print("function_name:", function_name)
    print("params:", params)
    # 环境变量中获取小程序AppID和AppSecret
    appid = os.getenv('WXA_APP_ID')
    secret = os.getenv('WXA_APP_SECRET')
    access_token = get_access_token(appid, secret)
    print("access_token:", access_token)
    env = os.getenv('WXA_ENV_ID')
    url = f"https://api.weixin.qq.com/tcb/invokecloudfunction?access_token={access_token}&env={env}&name={function_name}"
    response = requests.post(url, json.dumps(params))
    print("response:", response.json())
    print("=== invoke_cloud_function END ===")
    return response

def get_access_token(appid, secret):
    """
    获取微信开发的access_token。

    参数:
    appid (str): 微信的AppID。
    secret (str): 微信的AppSecret。

    返回:
    str: 微信的access_token，如果获取失败则返回None。
    """
    url = f"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={appid}&secret={secret}"
    response = requests.get(url)
    data = response.json()
    if 'access_token' in data:
        return data['access_token']
    else:
        return None