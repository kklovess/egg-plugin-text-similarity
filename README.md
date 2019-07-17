# egg-plugin-text-similarity

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

## 介紹

#### 此插件为中文文本相似度计算插件，适用于egg框架。

> ##### 第一种计算方式-余弦相似度计算
进行中文分词，然后计算文本词频，再计算空间向量，最后计算空间向量的余弦值，获得文本相似度。

计算结果越接近1，表示越相似。

> ##### 第二种计算方式-simhash计算

###### 此插件所使用的分词组件 nodejieba

## Install

```bash
$ npm i git+https://kklovess:fan1507538@github.com/kklovess/egg-plugin-cosine-similarity.git --save
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

```js
const similarity = await this.ctx.service.cosineSimilarity.getSimilarity('我是范立坤','范立坤是我');
// similarity = 1
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
