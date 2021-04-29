<template>
<el-affix>
  <el-header class="layout-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/" >
        <i class="el-icon-s-unfold"></i>
        <span class="hidden-xs-only">首页</span>
      </el-menu-item>
      <el-submenu :index="null">
        <template #title>
          <i class="el-icon-share"></i>
          <span class="hidden-xs-only">共享文件</span>
        </template>
        <el-menu-item index="/upload/index">上传文件</el-menu-item>
        <el-menu-item index="/upload/list">文件列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/message">
        <i class="el-icon-chat-dot-square"></i>
        <span class="hidden-xs-only">消息中心</span>
      </el-menu-item>
      <!-- <el-menu-item index="/about">
        <template #title>
          <i class="el-icon-share"></i>
          <span class="hidden-xs-only">{{ userinfo? userinfo: '未登录' }}</span>
        </template>
        <el-menu-item index="/upload/index">登录</el-menu-item>
        <el-menu-item index="/upload/list">注册</el-menu-item>
      </el-menu-item> -->
    </el-menu>
  </el-header>
</el-affix>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userinfo'])
  },
  setup() {
    let activeIndex = ref('1')

    return { activeIndex }
  }
}
</script>
