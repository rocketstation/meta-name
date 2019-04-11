const changeCase = require('@rocketstation/change-case')
const path = require('path')

module.exports = ({
  dispEnd = 0,
  dispStart = 0,
  exts,
  filters = [],
  prefix,
  roots,
  suffix,
  template = ['dir', 'name'],
} = {}) => (source = '', caseKind = 'c') => {
  const obj = path.parse(source)

  obj.dir = obj.dir.split(path.sep)
  obj.ext = obj.ext.replace('.', '')

  if (exts && !exts.includes(obj.ext)) return

  if (roots) {
    let root = roots.find((v) => obj.dir.includes(v))

    if (!root) return

    obj.dir = obj.dir.slice(obj.dir.indexOf(root), obj.dir.length)
  }

  obj.dir = obj.dir.slice(dispStart, obj.dir.length - dispEnd)

  const id = []
    .concat(
      prefix,
      template
        .reduce((r, v) => (obj.hasOwnProperty(v) ? r.concat(obj[v]) : r), [])
        .filter((v) => !filters.includes(v)),
      suffix
    )
    .filter(Boolean)

  if (changeCase.hasOwnProperty(caseKind)) return changeCase[caseKind](id)

  return id
}
