<template>
  <el-container>
    <el-main class="layout-main">
      <el-form :model="loginForm" ref="form" label-width="80px" class="login" :rules="rules">
        <el-form-item label="用户名" prop="login_name">
          <el-input v-model="loginForm.login_name" autocomplete="off" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off" prefix-icon="el-icon-key"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { login } from '../api/users'
export default {
  setup() {
    const loginForm = ref({
      login_name: '',
      pass: ''
    })
    const rules = {

    }
    const { ctx } = getCurrentInstance()
    const submitForm = (formName) => {
      ctx.$refs[formName].validate(async valid => {
        if (valid) {
          await login(loginForm.value)
        }
      })
    }

    return { loginForm, rules, submitForm }
  }
}
</script>
