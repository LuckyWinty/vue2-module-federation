<template>
  <div id="app">
    <VueDemo msg="Welcome to Your Vue.js App"/>
    <Content />
    <Button>button from remote</Button>
  </div>
</template>

<script>
import VueDemo from './components/VueDemo.vue'
import Content from './components/Content';
import Button from './components/Button';

export default {
  name: 'App',
  components: {
    VueDemo,
    Content,
    Button,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
