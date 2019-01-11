const changeCase = require('@rocketstation/change-case')
const path = require('path')

module.exports = function(
  pathTo = '',
  {
    caseId = 'c',
    dispEnd = 0,
    dispStart = 0,
    filters = [],
    isArr,
    isStrict,
    root,
    shouldSkipRoot,
    structure = ['ext', 'file', 'dir'],
  } = {}
) {
  const { dir: dirName, name: fileName, ext: extName } = path.parse(pathTo)

  let isInvalid = false

  let dirArr = dirName.split(path.sep).filter((v) => v.length > 0)

  if (root) {
    if (dirArr.includes(root))
      dirArr = dirArr.slice(dirArr.lastIndexOf(root) + (shouldSkipRoot ? 1 : 0))
    else isInvalid = true
  }

  if (dispStart > 0) dirArr = dirArr.slice(dispStart, dirArr.length)
  if (dispEnd > 0) dirArr = dirArr.slice(0, dirArr.length - dispEnd)

  let name = structure.reduce((r, v) => {
    switch (v) {
      case 'ext':
        return r.concat(extName.split('.').splice(1))
      case 'file':
        r.push(fileName)
        return r
      case 'dir':
        return r.concat(dirArr)
      default:
        return r
    }
  }, [])

  if (isStrict && isInvalid) return isArr ? [] : ''

  name = name.filter((v) => !filters.includes(v))

  return isArr ? name : changeCase[caseId](name)
}
