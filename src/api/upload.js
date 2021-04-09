import request from '../utils/request'
import { ApiGetFileList, ApiGetFileByPass, ApiDelFileById } from './API'

export function getFileList () {
  return request({
    url: ApiGetFileList.url,
    method: ApiGetFileList.method
  })
}

export function getFileByPass (data) {
  return request({
    url: ApiGetFileByPass.url,
    method: ApiGetFileByPass.method,
    data
  })
}

export function delFileById (params) {
  return request({
    url: ApiDelFileById.url,
    method: ApiDelFileById.method,
    params
  })
}
