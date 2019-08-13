'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.home.news);
  router.get('/newsindex', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.get('/newslist/:ido', controller.news.list);
};
