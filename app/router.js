'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
//   router.get('/', controller.home.index);
//   router.get('/news', controller.news.index);
//   router.get('/news3', controller.news.abc);
//   router.get('/newscontent', controller.news.content);
//   router.get('/newslist/:newsId', controller.news.list);


    router.get('/', controller.news.list)
    router.get('/newscontent', controller.news.content)
    router.post('/add', controller.news.add)

};
