<template>
<div id="myapp">
  <!-- header 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
          
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区域  占位 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入appheader组价
import appHeader from "./components/AppHeader.vue";
import appSidebar from "./components/AppSidebar.vue";

// ES6中模块的语法，导出一个对象
export default {
  name: "myapp",
  components: {
    appHeader,
    appSidebar
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
