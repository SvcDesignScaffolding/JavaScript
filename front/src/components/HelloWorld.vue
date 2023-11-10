<template>
  <div>
    <h1>Hello, World!</h1>
    <p>
      这是使用 Axios 发送 HTTP 请求的示例：
    </p>
    <button @click="getList()">获取列表</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  methods: {
    getList() {
      axios.get("http://localhost:3000/api/list").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
