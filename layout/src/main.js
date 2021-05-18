import Vue from "vue";
import Layout from './Layout.vue';

const Content = () => import("home/Content");
const Button = () => import("home/Button");
const VueDemo = () => import("home/VueDemo");

(async () => {
  const { sayHi } = await import("home/Utils");
  sayHi();
})();


Vue.component("content-element", Content);
Vue.component("button-element", Button);
Vue.component("vue-demo", VueDemo);

new Vue({
  render: h => h(Layout),
}).$mount('#app')
