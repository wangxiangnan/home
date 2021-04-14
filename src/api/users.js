import request from '../utils/request'
import { ApiSignup, ApiLogin } from './API'

export function signup (data) {
  return request({
    url: ApiSignup.url,
    method: ApiSignup.method,
    data
  })
}

export function login (data) {
  return request({
    url: ApiLogin.url,
    method: ApiLogin.method,
    data
  })
}
