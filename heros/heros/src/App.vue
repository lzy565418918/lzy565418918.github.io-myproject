<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <topHead></topHead>
    <!-- 侧边栏和内容 -->
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <sideBar></sideBar>
        <!-- 内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 导入头部
import topHead from "./assets/components/tophead.vue";
import sideBar from "./assets/components/sideBar.vue";

// 添加组件
export default {
  components: {
    topHead,
    sideBar
  }
};
</script>

<style>
</style>
