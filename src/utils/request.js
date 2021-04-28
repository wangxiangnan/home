import axios from 'axios'
import { ElMessage } from 'element-plus'
import { API_URL } from '../config/index'
import router from '../router'

const service = axios.create({
  baseURL: API_URL,
  timeout: 35000,
  withCredentials: true,
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errcode === 0) {
      return res
    } else if(res.errcode === -1) {
      router.replace({name: 'Login'})
    } else {
      ElMessage({
        type: 'error',
        message: res.errmsg,
        duration: 5 * 1000
      })
      return Promise.reject(res.errmsg || 'error')
    }
  },
  err => {
    console.log(err)
    ElMessage({
      type: 'error',
      message: err.message,
      duration: 5 * 1000
    })
    return Promise.reject(err)
  }
)

export default service
