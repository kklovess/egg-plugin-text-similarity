# egg-plugin-hello

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-plugin-hello.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-hello
[travis-image]: https://img.shields.io/travis/eggjs/egg-plugin-hello.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-plugin-hello
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-plugin-hello.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-plugin-hello?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-plugin-hello.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-plugin-hello
[snyk-image]: https://snyk.io/test/npm/egg-plugin-hello/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-hello
[download-image]: https://img.shields.io/npm/dm/egg-plugin-hello.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-hello

<!--
Description here.
-->

## Install

```bash
$ npm i egg-plugin-cosine-similarity --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.cosineSimilarity= {
  enable: true,
  package: 'egg-plugin-cosine-similarity',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.cosineSimilarity = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
