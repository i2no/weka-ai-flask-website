# 金销路 - 企业官网托管平台

这是一个使用Python和Flask框架开发的企业官网托管平台。

## 开发环境

- Python
- Flask

## 生产环境

- Nginx
- Gunicorn

## CentOS环境下的部署

### 1. 更新系统并安装必要的软件包
```bash
sudo yum update
sudo yum install -y gcc openssl-devel bzip2-devel libffi-devel
```

### 2. 安装Python和pip
```bash
sudo yum install -y python3 python3-pip
```

### 3. 创建Python虚拟环境
```bash
python3 -m venv myenv
```

### 4. 激活虚拟环境
```bash
source myenv/bin/activate
```

### 5. 安装Flask和Gunicorn
```bash
pip install --upgrade pip
pip install flask gunicorn
```

### 6. 克隆你的Flask项目
```bash
cd /var/www
git clone https://github.com/i2no/weka-ai-flask-website.git
```

### 7. 创建.env文件
```bash
cd weka-ai-flask-website
sudo cp .env.example .env
```

### 8. 安装项目依赖
```bash
pip install -r requirements.txt
```

### 9. 安装和配置Nginx
```bash
sudo yum install -y nginx
sudo vim /etc/nginx/conf.d/weka_ai_flask_website.conf
```

#### 在Nginx配置文件中添加以下内容：
```nginx
server {
    listen 80;
    server_name your_domain_or_IP;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 10. 启动并运行你的Flask应用程序
```bash
gunicorn -w 4 index:app
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 11. 修改nginx配置并重启
```bash
sudo vim /etc/nginx/conf.d/weka_ai_flask_website.conf
sudo nginx -t && sudo nginx -s reload
```

## CentOS安装Redis

### 1. 更新系统软件包
```bash
sudo dnf update -y
```

### 2. 安装Redis
```bash
sudo dnf install -y redis
```

### 3. 启动Redis服务
```bash
sudo systemctl start redis
```

### 4. 设置Redis开机自启
```bash
sudo systemctl enable redis
```

### 5. 检查Redis是否正在运行
```bash
sudo systemctl status redis
```

## Flask项目项目版本更新

```bash
cd /var/www
git pull
```

## 贡献

如果你有任何问题或者建议，欢迎提交issue或者pull request。

## 许可证

这个项目遵循MIT许可证。详情请参见LICENSE文件。
