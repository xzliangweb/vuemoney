import VueRouter from 'vue-router';
import Vue from "vue";
// 导入路由组件
import heroesList from "../views/heroes/List.vue";
import equipsList from "../views/equips/List.vue";
import weaponsList from "../views/weapons/List.vue";
import HeroAdd from "../views/heroes/Add.vue";

// Vue.use()注册VueRouter 插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({

    // 设置精确的类样式  
    // url中的路由地址，包含a标签的路由地址，就高亮显示
    // linkExactActiveClass: 'active', 精确的查找
    // url中的路由地址包含a标签中的路由地址
    linkActiveClass:'active',
    routes:[ 
        {path:'/',redirect:'/heroes'},   
        {path:'/heroes',component:heroesList},
        {path:'/equips',component:equipsList},
        {path:'/weapons',component:weaponsList},
        {path:'/heroadd',component:HeroAdd}
    ]
});
// 到出对象
export default router;

