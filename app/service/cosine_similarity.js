'use strict';

const jieba = require('nodejieba');

const Service = require('egg').Service;

/**
 * 获取关键词组的词频(即文本空间向量)
 * @param {*} words
 * @param {*} specimen
 */
async function textVector(words, specimen) {
    return words.map(w => specimen.filter(item => item === w).length);
}

/**
 * 计算文本空间向量余弦值
 * @param {*} vector1
 * @param {*} vector2
 */
async function vectorCos(vector1, vector2) {
    let numerator = 0;
    for (let i = 0; i < vector1.length; i++) {
        numerator += vector1[i] * vector2[i];
    }
    const denominator = (await boundNorm(vector1)) * (await boundNorm(vector2));
    if (denominator == 0) {
        throw new Error('计算余弦值时错误；分母不可以为0');
    }
    const cos = numerator / denominator;
    return cos;
}

/**
 * 范数
 * @param {*} vector
 */
async function boundNorm(vector) {
    const sum = vector.reduce((sum, num) => {
        sum += Math.pow(num, 2);
        return sum;
    }, 0);
    return Math.sqrt(sum);
}

class CosineSimilarityService extends Service {

    /**
     * 获取文本相似度
     * @param {String} doc1 要比较的文档1
     * @param {String} doc2 要比较的文档2
     * @param {Number} [topN=20] 提取关键词数量(默认20)
     */
    async getSimilarity(doc1, doc2, topN = 20) {
        doc1 = doc1.trim();
        doc2 = doc2.trim();
        const cuts1 = jieba.extract(doc1, topN);
        const cuts2 = jieba.extract(doc2, topN);
        // 合并关键字
        const allWords = [...new Set(cuts1.concat(cuts2))];
        // 获取词频
        const vector1 = await textVector(allWords, cuts1);
        const vector2 = await textVector(allWords, cuts2);
        // 计算相似度
        const cos = vectorCos(vector1, vector2);
        return cos;
    }
}

module.exports = CosineSimilarityService;