const parser = require('./index')

const path = 'root/dir/name.ext'

it('parses path to name', () => {
  expect(parser()(path)).toEqual('rootDirName')
})

it('supports casing', () => {
  expect(parser()(path, 'k')).toEqual('root-dir-name')
})

it('returns array', () => {
  expect(parser()(path, false)).toEqual(['root', 'dir', 'name'])
})

it('adds prefix and suffix', () => {
  expect(
    parser({
      prefix: 'prefix',
      suffix: 'suffix',
    })(path)
  ).toEqual('prefixRootDirNameSuffix')
})

it('supports templating', () => {
  expect(parser({ template: ['ext', 'name', 'dir'] })(path)).toEqual(
    'extNameRootDir'
  )
})

it('filters specific names', () => {
  expect(parser({ filters: ['dir'] })(path)).toEqual('rootName')
})

it('filters by extensions', () => {
  expect(parser({ exts: ['js'] })(path)).toEqual()
  expect(parser({ exts: ['ext'] })(path)).toEqual('rootDirName')
})

it('filters by roots', () => {
  expect(parser({ roots: ['tst'] })(path)).toEqual()
  expect(parser({ roots: ['dir'] })(path)).toEqual('dirName')
  expect(parser({ roots: ['root'] })(path)).toEqual('rootDirName')
})

it('supports displacement', () => {
  expect(parser({ dispStart: 1 })(path)).toEqual('dirName')
  expect(parser({ dispEnd: 1 })(path)).toEqual('rootName')
})
