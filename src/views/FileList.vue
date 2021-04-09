<template>
  <ul class="fileList">
    <template v-for="item in fileList" :key="item.id">
      <li class="card">
        <el-row>
          <el-col :sm="8">
            <div class="thumbnail">
              <template v-if="!item.has_pass">
                <template v-if="/image/.test(item.type)">
                  <el-image :src="getFilePath(item.name)" fit="contain"></el-image>
                </template>
                <template v-else-if="item.isVideo">
                  <p>video</p>
                </template>
                <template v-else>
                  <p>{{ getFileInfo(item.origin_name).extension }}</p>
                </template>
              </template>
              <template v-else>
                <p class="el-icon-lock"></p>
              </template>
            </div>
          </el-col>
          <el-col :sm="16">
            <div class="card-body">
              <h3 class="card-text">{{ item.origin_name }}</h3>
              <p class="card-text">{{ item.descs }}</p>
              <p class="card-text"><small class="text-muted">{{ item.pub_time }}</small></p>
              <el-button size="small" class="el-icon-download hover-scale" @click="downFile(item.id, item.name, item.has_pass)" circle></el-button>
              <el-button type="primary" size="small" class="el-icon-view hover-scale" @click="previewFile(item.id, item.name, item.has_pass)" circle></el-button>
              <el-button type="danger" size="small" class="el-icon-delete hover-scale" @click="delFile(item.id)" circle></el-button>
            </div>
          </el-col>
        </el-row>
      </li>
    </template>
    <el-empty v-if="fileList.length === 0" :image-size="140" description="空空如也">
      <el-button type="text" @click="$router.push({name: 'UploadIndex'})">去上传文件<i class="el-icon-right"></i></el-button>
    </el-empty>
  </ul>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { getFileList, getFileByPass, delFileById } from '../api/upload'
import { triggerDownLoad, getFilePath, getFileInfo } from '../utils'
const { ctx } = getCurrentInstance()

// #1 获取列表相关
const fileList = ref([])
const getList = async () => {
  const res = await getFileList()
  fileList.value = res.list
}
onMounted(getList)

// #2 下载文件
const downFile = async function (id, name, hasPass) {
  // console.log(id, hasPass)
  let fileName = name
  if (hasPass) {
    let { value } = await ctx.$prompt('请输入密码', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /\w+/,
      inputErrorMessage: '密码不能为空'
    })
    const res = await getFileByPass({ id, pass: value })
    fileName = res.data.name
  }
  triggerDownLoad(getFilePath(fileName), fileName)
}

const previewFile = async function (id, name, hasPass) {
  let fileName = name
  if (hasPass) {
    let { value } = await ctx.$prompt('请输入密码', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /\w+/,
      inputErrorMessage: '密码不能为空'
    })
    const res = await getFileByPass({ id, pass: value })
    fileName = res.data.name
  }
  ctx.$router.push({name: 'Preview', query: {url: getFilePath(fileName)}})
}

// #3 删除文件

const delFile = async function (id) {
  await delFileById({ id })
  fileList.value = fileList.value.filter(file => file.id !== id)
}
</script>
