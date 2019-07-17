'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/plugin-cosine-similarity.test.js', () => {
    let app;
    before(() => {
        app = mock.app({
            baseDir: 'apps/plugin-cosine-similarity-test',
        });
        return app.ready();
    });

    after(() => app.close());
    afterEach(mock.restore);

    it('should GET /', () => {
        return app.httpRequest()
            .get('/')
            .expect('hi, cosineSimilarity')
            .expect(200);
    });

    it('the similarity should be 1', async() => {
        const ctx = app.mockContext();
        const cos = await ctx.service.cosineSimilarity.getSimilarity('我是范立坤', '范立坤是我');
        assert(cos === 1);
    });
});