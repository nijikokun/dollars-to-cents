# Debounce

[![version][npm-version]][npm-url]
[![License][npm-license]][license-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

Convert USD Dollars (formatted string, non-formatted, numerical value) to USD Cents (numerical).

## Install

- NPM: `npm install dollars-to-cents`

## Example

```js
var dollarsToCents = require('dollars-to-cents')

console.log(dollarsToCents('$1,030.25')) // 103025
```

## License

Licensed under [The MIT License](LICENSE).

[license-url]: https://github.com/Nijikokun/debounce/blob/master/LICENSE

[travis-url]: https://travis-ci.org/Nijikokun/debounce
[travis-image]: https://img.shields.io/travis/Nijikokun/debounce.svg?style=flat

[npm-url]: https://www.npmjs.com/package/debounce
[npm-license]: https://img.shields.io/npm/l/debounce.svg?style=flat
[npm-version]: https://img.shields.io/npm/v/debounce.svg?style=flat
[npm-downloads]: https://img.shields.io/npm/dm/debounce.svg?style=flat

[codeclimate-url]: https://codeclimate.com/github/Nijikokun/debounce
[codeclimate-quality]: https://img.shields.io/codeclimate/github/Nijikokun/debounce.svg?style=flat
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/Nijikokun/debounce.svg?style=flat

[david-url]: https://david-dm.org/Nijikokun/debounce
[david-image]: https://img.shields.io/david/Nijikokun/debounce.svg?style=flat
