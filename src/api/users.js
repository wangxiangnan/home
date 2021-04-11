import request from '../utils/request'
import { ApiSignup } from './API'

export function signup (data) {
  return request({
    url: ApiSignup.url,
    method: ApiSignup.method,
    data
  })
}
