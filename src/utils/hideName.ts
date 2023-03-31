const hideName = (strName: string) => {
  if (strName.length > 2) {
    let originName = strName.split('')
    originName.forEach(function (name, i) {
      if (i === 0 || i === originName.length - 1) return
      originName[i] = '*'
    })
    let joinName = originName.join()
    return joinName.replace(/,/g, '')
  } else {
    let pattern = /.$/ // 정규식
    return strName.replace(pattern, '*')
  }
}

export default hideName
