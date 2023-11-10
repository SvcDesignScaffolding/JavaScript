# 项目介绍

该项目使用 Node.js 和 Express 构建了一个返回 `/api/list` 的服务。前端使用 React 和 Axios 来请求后端服务。

## 技术框架

* Vue3
* Axios
* Node.js
* Express

## 代码结构

frontend/
├── src/
│   ├── App.js
│   ├── components/
│   │   └── List.js
│   └── index.js
└── package.json

backend/
├── config/
├── node_modules/
├── app/
│   ├── controllers/
│   │   └── ListController.js
│   ├── models/
│   │   └── List.js
│   └── routes/
│       └── index.js
└── app.js

* frontend/src/components/List.js 文件定义了 List 组件。组件使用 Axios 来请求 /api/list 路由。
* backend/app/controllers/ListController.js 文件定义了 ListController 控制器。
* backend/app/routes/index.js 文件定义了 /api/list 路由。路由使用 ListController 控制器来处理请求。

## API
/api/list 路由返回一个包含两个用户信息的列表。

## 运行

安装依赖：
cd backend
npm install

cd frontend
npm install
启动应用程序：
cd backend
npm run dev

cd frontend
npm start
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
