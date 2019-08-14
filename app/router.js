'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app
  router.get('/', controller.home.index)
  router.get('/news', controller.home.news)
  router.get('/newsindex', controller.news.index)
  router.get('/newscontent', controller.news.content)
  router.get('/newslist/:ido', controller.news.list)
  router.post('/newssave', controller.news.newsSave)
  router.get('/spider', controller.news.spiderNews)

  // daily
  router.get('/daily', controller.daily.index)
  router.get('/dailylogin', controller.daily.loginCheck)
}
