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
    await this.ctx.render('news', {
      msg,
      list,
    })
    // this.ctx.body = '新闻首页'
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
}

module.exports = NewsController
