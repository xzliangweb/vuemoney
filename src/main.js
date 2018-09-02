import Vue from 'vue';
import App from './App.vue';

// 导入全局样式和导入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
    el: '#app',
    render: h => h(App)
})