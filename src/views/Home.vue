<template>
  <canvas id="canvas" width="300" height="300"></canvas>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'Home',
  setup() {
    const initCanvas = function() {
      const canvas = document.querySelector('#canvas')
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ff00ff'
      ctx.fillRect(0, 0, 100, 100)
    }
    const setPageSize = function() {

    }
    onMounted(initCanvas)
    return {}
  }
}
</script>
