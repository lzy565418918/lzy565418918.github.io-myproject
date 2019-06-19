import Vue from 'vue'
import App from './App.vue'
//  引入bootstrap样式 全局引用
// import '../node_modules/'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'
// 把关于路由的所有设置放进router.js中，尽可能使main.js中的内容简洁
// 导入router.js
import router from './router'

import axios from "axios"
// 把axios添加到Vue的原型中，让其他文件也能使用
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
