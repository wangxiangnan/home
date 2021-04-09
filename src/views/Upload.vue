<template>
  <el-form :model="fileData" :rules="rules" ref="fileForm" label-width="80px" class="upload-form">
    <el-form-item label="文件上传">
      <el-upload
        class="upload-demo"
        :action="uploadAction"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="onSuccess"
        :data="fileData"
        multiple
        ref="upload"
        :file-list="fileList"
        :auto-upload="false"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <template #tip>
          <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
        </template>
      </el-upload>
    </el-form-item>
    <el-form-item label="是否密码" prop="has_pass">
      <el-radio-group v-model="fileData.has_pass">
        <el-radio :label="0">无</el-radio>
        <el-radio :label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="fileData.has_pass" label="密码" prop="pass">
      <el-input v-model="fileData.pass"></el-input>
    </el-form-item>
    <el-form-item label="文件描述" prop="descs">
      <el-input type="textarea" v-model="fileData.descs" :rows="6"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('fileForm')">立即创建</el-button>
      <el-button @click="resetForm('fileForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>

import { reactive, getCurrentInstance } from 'vue'
import { ApiUpload } from '../api/API'
import { BASE_URL } from '../config/index'
const { ctx } = getCurrentInstance()
const fileList = reactive([])
const uploadAction = `${ BASE_URL }${ ApiUpload.url }`
const fileData = reactive({
  pass: '',
  has_pass: 0,
  descs: ''
})
const rules = {
  pass: [
    { required: true, message: '密码必填', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  has_pass: [
    { required: true, message: '请选择活动资源', trigger: 'change' }
  ]
}
const submitForm = function (formName) {
  ctx.$refs[formName].validate((valid) => {
    if (valid) {
      ctx.$refs.upload.submit()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = function (formName) {
  ctx.$refs[formName].resetFields()
}
const handleRemove = function (file, fileList) {
  console.log(file, fileList)
}
const handlePreview = function (file) {
  console.log(file)
}
const beforeRemove = function (file) {
  return ctx.$confirm(`确定移除 ${file.name}？`)
}
const onSuccess = function (res) {
  if (res.errcode === 0) {
    // ctx.resetForm('fileForm')
    // ctx.$refs.upload.clearFiles()
    ctx.$router.push({ name: 'FileList' })
  }
}

</script>
