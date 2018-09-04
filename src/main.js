import Vue from 'vue';
import App from './App.vue';



// 导入全局样式和导入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由模块
import router from './routers';

// 导入axios 
import axios from 'axios';
// 改造完成之后给所原型添加的构造函数
Vue.prototype.$http = axios


new Vue({
    el: '#app',
    render: h => h(App),
    router
})