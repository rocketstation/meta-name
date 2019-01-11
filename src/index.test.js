const mn = require('./index')

const path = '/prefix/root/foo/bar/file.ext'

it('parses path to name', () => {
  expect(mn(path)).toBe('extFilePrefixRootFooBar')
})

it('return array if isArr === true', () => {
  expect(mn(path, { isArr: true })).toEqual([
    'ext',
    'file',
    'prefix',
    'root',
    'foo',
    'bar',
  ])
})

it('changes name case', () => {
  expect(mn(path, { caseId: 'p' })).toBe('ExtFilePrefixRootFooBar')
})

it('customizes name structure', () => {
  expect(mn(path, { structure: ['dir', 'file', 'ext'] })).toBe(
    'prefixRootFooBarFileExt'
  )
})

it('skips invalid structure components', () => {
  expect(
    mn(path, {
      structure: [
        'invalid',
        'dir',
        'invalid',
        'file',
        'invalid',
        'ext',
        'invalid',
      ],
    })
  ).toBe('prefixRootFooBarFileExt')
})

it('skips certain amount of folders from start if dispStart specified', () => {
  expect(mn(path, { dispStart: 1 })).toBe('extFileRootFooBar')
})

it('skips certain amount of folders from end if dispEnd specified', () => {
  expect(mn(path, { dispEnd: 1 })).toBe('extFilePrefixRootFoo')
})

it('skips all folders before root folder if root is specified', () => {
  expect(mn(path, { root: 'root' })).toBe('extFileRootFooBar')
})

it('skips all folders before root & root folder if root is specified & shouldSkipRoot === true', () => {
  expect(
    mn(path, {
      root: 'root',
      shouldSkipRoot: true,
    })
  ).toBe('extFileFooBar')
})

it('returns empty string if path doesn’t contain root if root is specified & isStrict === true', () => {
  expect(
    mn(path, {
      root: 'tst',
      isStrict: true,
    })
  ).toBe('')
})

it('returns empty array if path doesn’t contain root if root is specified & isStrict === true & isArr === true', () => {
  expect(
    mn(path, {
      root: 'tst',
      isArr: true,
      isStrict: true,
    })
  ).toEqual([])
})
