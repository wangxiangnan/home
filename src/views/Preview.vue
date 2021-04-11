<template>
  <div class="preview">
    <template v-if="types.isImage">
      <el-image
        :src="fileUrl"
        :preview-src-list="[fileUrl]"
        fit="contain"
      ></el-image>
    </template>
    <template v-else-if="types.isVideo">
      <video :src="fileUrl" controls></video>
    </template>
    <template v-else-if="types.isAudio">
      <audio :src="fileUrl" controls></audio>
    </template>
    <template v-else-if="types.isCanView">
      <iframe :src="fileUrl" frameborder="0"></iframe>
    </template>
    <template v-else>
      <p>暂不支持预览</p>
    </template>
    <el-button type="success" class="back" icon="el-icon-arrow-left" circle @click="$router.back()"></el-button>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
export default {
  setup() {
    const types = ref({})
    let fileUrl = ref('')
    const { ctx } = getCurrentInstance()
    const setFileType = function(fileName) {
      types.value.isImage = /jpg|jpeg|png|gif/.test(fileName)
      types.value.isVideo = /mp4/.test(fileName)
      types.value.isAudio = /mp3/.test(fileName)
      types.value.isCanView = /pdf|txt/.test(fileName)
    }

    const init = function() {
      const { url } = ctx.$router.currentRoute.value.query
      setFileType(url)
      fileUrl.value = url
    }

    onMounted(init)

    return { fileUrl, types, setFileType, init }
  }
}
</script>
