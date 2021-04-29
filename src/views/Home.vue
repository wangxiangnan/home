<template>
  <canvas id="canvas" width="300" height="300"></canvas>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['userinfo'])
  },
  setup() {
    const { ctx } = getCurrentInstance()
    const initCanvas = function() {
      const canvas = document.querySelector('#canvas')
      const canCtx = canvas.getContext('2d')
      console.log(ctx.userinfo)
      canCtx.fillStyle = '#ff00ff'
      canCtx.fillRect(0, 0, 100, 100)
    }
    const setPageSize = function() {

    }
    onMounted(initCanvas)
    return {}
  }
}
</script>
