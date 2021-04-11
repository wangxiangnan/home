<template>
  <el-form :model="form" ref="signupForm" label-width="100px" class="signup" :rules="rules">
    <el-form-item label="用户名" prop="login_name">
      <el-input v-model="form.login_name" autocomplete="off" prefix-icon="el-icon-user"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="form.pass" autocomplete="off" prefix-icon="el-icon-key"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone_number">
      <el-input type="number" v-model="form.phone_number" autocomplete="off" prefix-icon="el-icon-mobile-phone"></el-input>
    </el-form-item>
    <el-form-item label="出生日期" prop="birthday">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="选择日期">
          </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('signupForm')">提交</el-button>
      <el-button @click="resetForm('signupForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { signup } from '../api/users'
export default {
  setup() {
    const form = ref({
      login_name: '',
      pass: '',
      phone_number: '',
      name: '',
      birthday: ''
    })
    const rules = {

    }
    const { ctx } = getCurrentInstance()
    const submitForm = (formName) => {
      ctx.$refs[formName].validate(async valid => {
        if (valid) {
          await signup(form.value)
        }
      })
    }

    return { form, rules, submitForm }
  }
}
</script>
