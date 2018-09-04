import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


// 导入全局样式和导入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由组件
import heroesList from "./views/heroes/List.vue";
import equipsList from "./views/equips/List.vue";
import weaponsList from "./views/weapons/List.vue";

// Vue.use()注册VueRouter 插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({

    // 设置精确的类样式
    linkExactActiveClass: 'active',
    routes:[    
        {path:'/heroes',component:heroesList},
        {path:'/equips',component:equipsList},
        {path:'/weapons',component:weaponsList}
    ]
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
})