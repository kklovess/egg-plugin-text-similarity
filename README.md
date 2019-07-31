# egg-plugin-text-similarity


## 介紹

### 此插件为中文文本相似度计算插件，适用于egg框架。

#### 1. 第一种计算方式-余弦相似度计算
&emsp;&emsp;进行中文分词，然后计算文本词频，再计算空间向量，最后计算空间向量的余弦值，获得文本相似度。

&emsp;&emsp;计算结果越接近1，表示越相似。

#### 2. 第二种计算方式-simhash计算`待实现`

> 此插件所使用的分词组件 nodejieba

## Install

```bash
$ npm i git+https://kklovess:fan1507538@github.com/kklovess/egg-plugin-text-similarity.git --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.textSimilarity = {
  enable: true,
  package: 'egg-plugin-text-similarity',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.textSimilarity = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example
### 1. 余弦相似度计算
```js
const similarity = await this.ctx.service.cosineSimilarity.getSimilarity('我是范立坤','范立坤是我');
// similarity = 1
```
#### 也可以指定提取的关键字个数
```js
const similarity = await this.ctx.service.cosineSimilarity.getSimilarity('我是范立坤','范立坤是我', 5);
// similarity = 1
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
