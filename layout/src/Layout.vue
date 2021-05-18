<template>
  <div class="layout-app">
    <!-- host app HOST-->
    <div class="app-label">
      # Hosting App [HOST]
    </div>
    下面是远程引入的 组件:
    <div class="remote-component">
      <!-- remote-component REMOTE -->
      <div class="app-label">
        #remote-component [REMOTE]
      </div>
      <content-element />
      <button-element>remote button</button-element>
      <vue-demo />
    </div>
  </div>
</template>

<script>
import VueDemo from '../../home/src/components/VueDemo.vue';
export default {
  components: { VueDemo },};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.remote-component {
  border: 1px solid blue;
  padding: 10px;
}
.layout-app {
  border: 1px solid green;
  padding: 10px;
}
.app-label {
  padding: 5px 2px;
  font-style: italic;
  font-size: 20px;
  color: gray;
}
</style>
