const EnumMethod = {
  Post : 'post',
  Get : 'get',
  Delete : 'delete',
  Put : 'put',
}

export const ApiUpload = {
  url: '/api/upload',
  method: EnumMethod.Post
}
export const ApiGetFileList = {
  url: '/upload/list',
  method: EnumMethod.Get
}

export const ApiGetFileByPass = {
  url: '/upload/getFilePathByPass',
  method: EnumMethod.Post
}

export const ApiDelFileById = {
  url: '/upload/del',
  method: EnumMethod.Delete
}

export const ApiSignup = {
  url: '/signup',
  method: EnumMethod.Post
}

export const ApiLogin = {
  url: '/login',
  method: EnumMethod.Post
}

export const ApiGetUserInfo = {
  url: '/users/getUserInfo',
  method: EnumMethod.Get
}
