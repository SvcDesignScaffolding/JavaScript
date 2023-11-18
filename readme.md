# 项目介绍

该项目使用 Node.js 和 Express 构建了一个返回 `/api/list` 的服务。前端使用 React 和 Axios 来请求后端服务。

## 技术框架

* Vue3
* Axios
* Node.js
* Express

# 前端

1. 目录结构
```
frontend/
|-- src
|   |-- App.vue
|   |-- main.js
|   |-- components
|   |   |-- List.vue
|   |-- router.js
|-- package.json
```
2. 依赖 
```
Vue 3 
Vue Router
Axios
```

3. 构建命令

- 安装依赖 npm install
- 启动开发服务器 npm run serve
- 构建生产版本 npm run build

4. curl 测试命令
# 测试获取列表数据 curl http://localhost:8080


# 后端

1. 目录结构
```
your-backend-project
|-- app.js
|-- package.json
|-- app
|   |-- controllers
|   |   |-- ListController.js
|   |-- models
|   |   |-- List.js
|   |-- routes
|   |   |-- index.js
```

2. API 接口说明 GET /api/list: 获取包含两个用户信息的列表
3. 依赖 Express
4. 构建命令
- 安装依赖 npm install
- 启动服务器 npm start
5. curl 测试命令
- 测试获取列表数据
curl http://localhost:3000/api/list

## 运行

启动后，访问 http://localhost:3000/，可以看到如下结果：

HTML
<ul>
  <li>张三</li>
  <li>李四</li>
</ul>

# 部署

可以使用 Docker 来部署该应用程序。

构建镜像：
docker build -t backend .

docker build -t frontend .
运行镜像：
docker run -d -p 80:80 backend

docker run -d -p 3000:3000 frontend
浏览器访问 http://localhost:3000/ 即可看到效果。

