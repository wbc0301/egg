'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    // async index() {
    //     const { ctx } = this;
    //     ctx.body = {text: '这是新闻内容!!!', query: ctx.query};
    // }
    // async abc() {
    //     this.ctx.body = '哈哈哈！！！！'
    // }
    // async content() {
    //     // this.ctx.body = '这就是新闻内容！！！！'
    //     // let content = '这就是新闻内容！！！！(by ejs rendered!!)'
    //     // let list = [111,222,333]
    //     // await this.ctx.render('news', {content, list})

    //     let data = await this.service.news.getNewsList()
    //     await this.ctx.render('news', data)
    // }
    // async list() {
    //     this.ctx.body = this.ctx.params.newsId;
    // }

    async list() {
        let list = await this.service.news.list()
        await this.ctx.render('list', { list: list.result, csrf: this.ctx.csrf })
    }

    async content() {
        let content = await this.service.news.content()
        console.log(content)
        await this.ctx.render('content', { list: content.result[0] })
    }

    async add() {
        this.ctx.body = this.ctx.request.body;
    }

}

module.exports = NewsController;
