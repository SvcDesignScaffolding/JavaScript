# 构建阶段
FROM node:18-alpine as builder

WORKDIR /app
COPY package.json .
RUN npm install --prefer-offline
COPY . .
RUN npm run build

# 运行阶段
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 80
CMD ["node", "index.js"]
