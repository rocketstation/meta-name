# Meta Name

Meta Name parses path to name based on provided config

## Installation

```
npm i @rocketstation/meta-name
```

## Usage

```javascript
import parser from '@rocketstation/meta-name'

const path = 'dir/name.ext'

const parse = parser({
  dispEnd: 0,
  dispStart: 0,
  exts: ['ext'],
  filters: [],
  prefix: '',
  roots: ['dir'],
  suffix: [],
  template: ['dir', 'name'],
})

console.log(parse(path, 'k')) // dir-name
```

## Config

  `parser()`

  `dispEnd` - amount of dirs from root to be omitted. Default is `0`

  `dispStart` - amount of dirs from file to be omitted. Default is `0`

  `exts` - array of extensions to be handled. If provided, paths with invalid extensions will be omitted. Default is `undefined`

  `filters` - array of strings which must be omitted. Default is `[]`

  `prefix` - string or array of strings to be added before result. Default is `undefined`

  `roots` - array of roots to be handled. If provided, paths with invalid roots will be omitted. Default is `undefined`

  `suffix` - string or array of strings to be added after result. Default is `undefined`

  `template` - array of strings. supported values are `'root', 'dir', 'base', 'name', 'ext'`. Default is `['dir', 'name']`

  `parse()`

  `source` - any valid path. Default is `''`
  `case` - Default is `'c'`. Any case kind from [@rocketstation/change-case](https://github.com/rocketstation/change-case)

## Motivation

We were tired of writing this code again and again

## License

Meta Name is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
