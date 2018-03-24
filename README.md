# Meta Name

Meta Name parses path to name based on provided config

## Installation

```
npm i --save @rocketstation/meta-name
```

## Usage

```javascript
import metaName from '@rocketstation/meta-name'

const path = 'dir/file.ext'

console.log(metaName(path)) // extFileDir
```

## Config

Name | Type | Vals | Default | Description
| - | - | - | - | - |
`caseId` | `String` | [Change Case](https://github.com/rocketstation/change-case) | `'cl'` | Defines name case
`structure` | `Array<String>` | `[...String('dir', 'file', 'ext')]` | `['ext', 'file', 'dir']` | Defines name pattern
`filters` | `Array<String>` | `[...String]` | `[]` | Filters specified dirs, files, extensions
`dispStart` | `Number` | Any Positive Int | `0` | Skips `N` folders from start
`dispEnd` | `Number` | Any Positive Int | `0` | Skips `N` folders from end
`isArr` | `Boolean` | `(true, false)` | `undefined` | If `true`, returns `Array` instead of `String`
`root` | `String` | Any String | `undefined` | If set & path includes `root` folder, skips all folders before. Otherwise parses full path
`shouldSkipRoot` | `Boolean` | `(true, false)` | `undefined` | If `true`, skips `root` folder
`isStrict` | `Boolean` | `(true, false)` | `undefined` | If `true` & path not includes `root` folder, returns empty `String` or `Array`


## Motivation

We were tired of writing this code again and again

## License

Meta Name is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
