<template>
  <div>
    <h2>List Component</h2>
    <button @click="fetchList">Fetch List</button>
    <div v-if="loading">Loading...</div>
    <ul v-if="userList.length > 0">
      <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from axios;

export default {
  name: List,
  data() {
    return {
      loading: false,
      userList: []
    };
  },
  methods: {
    fetchList() {
      this.loading = true;

      // 使用 Axios 发送 GET 请求到后端的 /api/list
      axios.get(/api/list)
        .then(response => {
          // 请求成功，更新 userList 数据
          this.userList = response.data;
        })
        .catch(error => {
          // 请求失败，处理错误
          console.error(Error fetching list:, error);
        })
        .finally(() => {
          // 无论请求成功还是失败，都将 loading 置为 false
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
/* Component-specific styles here */
</style>
