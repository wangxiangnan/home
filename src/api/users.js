import request from '../utils/request'
import { ApiSignup, ApiLogin, ApiGetUserInfo } from './API'

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

export function fetchUserInfo () {
  return request({
    url: ApiGetUserInfo.url,
    method: ApiGetUserInfo.method,
  })
}
