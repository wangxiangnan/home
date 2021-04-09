import axios from 'axios'
import { ElMessage } from 'element-plus'
import { BASE_URL } from '../config/index'

const service = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
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
    } else {
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
