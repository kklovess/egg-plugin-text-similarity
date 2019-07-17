# egg-plugin-cosine-similarity

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-plugin-cosine-similarity.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-cosine-similarity
[travis-image]: https://img.shields.io/travis/eggjs/egg-plugin-cosine-similarity.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-plugin-cosine-similarity
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-plugin-cosine-similarity.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-plugin-cosine-similarity?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-plugin-cosine-similarity.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-plugin-cosine-similarity
[snyk-image]: https://snyk.io/test/npm/egg-plugin-cosine-similarity/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-cosine-similarity
[download-image]: https://img.shields.io/npm/dm/egg-plugin-cosine-similarity.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-cosine-similarity

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
exports.cosineSimilarity = {
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

const similarity = await this.ctx.service.cosineSimilarity.getSimilarity('我是范立坤','范立坤是我');
// similarity = 1

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
