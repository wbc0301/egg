'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        // let content = '这就是首页！！！！(by ejs rendered!!)'
        // let list = [111,222,333]
        let data = await this.service.news.getNewsList()
        await this.ctx.render('news', data)
    }
}

module.exports = HomeController;
