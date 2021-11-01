'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    // async getNewsList() {
    //     return {
    //         content: '这是定义在service里的数据，可以被不同的controller调用',
    //         list: [444, 555, 666]
    //     }
    // }
    async list() {
        let url = this.config.baseUrl + 'appapi.php?a=getPortalList&catid=20&page=1'
        let data = await this.ctx.curl(url)
        return JSON.parse(data.data)
    }
    async content() {
        let url = this.config.baseUrl + 'appapi.php?a=getPortalArticle&aid=' + this.ctx.query.aid
        let data = await this.ctx.curl(url)
        return JSON.parse(data.data)
    }
}

module.exports = NewsService;
