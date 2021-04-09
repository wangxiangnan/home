<template>
  <el-container>
    <main-header></main-header>
    <el-main class="layout-main">
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import MainHeader from './Header.vue'
export default {
  components: {
    MainHeader
  },
  setup() {

  }
}
</script>
