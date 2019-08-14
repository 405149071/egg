'use strict'

const Controller = require('egg').Controller

class NewsController extends Controller {
  async index() {
    // 数据从服务层取得
    // const msg = 'ejs'
    const msg = await this.service.user.getUserInfo()
    // const list = [ '111', '222', '333' ]
    // 数据从另一个service层获取
    const list = await this.service.news.getNewsList()
    // console.log(list, '11111')
    // 获取cookie的值
    console.log('cookie username=', this.ctx.cookies.get('username'))
    await this.ctx.render('news', {
      msg,
      list,
      // csrf防范  方法1如下，方法2 设置全局中间件auth
      // csrf: this.ctx.csrf,
    })
    // this.ctx.body = '新闻首页'
  }

  async newsSave() {
    // 获取post数据
    console.log('接收的数据为:', this.ctx.request.body)
    this.ctx.body = '保存数据'
  }

  async list() {
    // 获取动态路由 传值  // koa  = ctx.params
    console.log(this.ctx.params)
    this.ctx.body = '新闻列表'
  }

  async content() {
    // 获取get传值  koa  = ctx.query
    console.log(this.ctx.query)
    this.ctx.body = '新闻详情'
  }

  async spiderNews() {
    const spidernews = await this.service.news.getSpiderNews()
    console.log(spidernews)
    await this.ctx.render('spidernews', {
      list: spidernews,
    })
    // this.ctx.body = '新闻详情'
  }
}

module.exports = NewsController
