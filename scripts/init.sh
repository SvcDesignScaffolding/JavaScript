#!/bin/bash

# 创建目录结构
mkdir -pv .github/workflows/    \
          front/public/         \
          front/src/components/ \

mkdir -pv backend/config/           \
          backend/node_modules/     \
          backend/app/controllers/  \
          backend/app/middleware/   \
          backend/app/models/       \
          backend/app/routes/   

touch front/Dockerfile \
      front/src/App.vue \
      front/src/main.js \
      front/src/router.js \
      front/src/components/HelloWorld.vue \
      front/package.json \
      front/readme.md

touch \
      backend/app.js                            \
      backend/app/controllers/ListController.js \
      backend/app/routes/index.js               \ 
      backend/package.json

# 提示初始化完成
echo "项目初始化完成"
