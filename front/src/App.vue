<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
