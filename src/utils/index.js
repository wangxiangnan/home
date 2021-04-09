import { FILE_PATH } from '../config'

export function triggerDownLoad (url, name) {
  let a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export function getFilePath (name) {
  return `${FILE_PATH}/${name}`
}

export function getFileInfo (fileName, isToUpperCase=false) {
  const seprateIndex = fileName.lastIndexOf('.')
  let name = fileName.slice(0, seprateIndex)
  let extension = fileName.slice(seprateIndex+1)
  if (isToUpperCase) {
    name = name.toUpperCase()
    extension = extension.toUpperCase()
  }
  return { name, extension }
}
