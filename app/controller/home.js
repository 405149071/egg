'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this
    const url = this.config.spiderUrl
    // 扩展application
    console.log('扩展extend，applicaton = %s', this.app.foo())
    // 扩展contenxt
    console.log('扩展extend，context = %s', this.ctx.getHost())
    // 调用扩展helper里的数据
    console.log('扩展extend，helper = %s', this.ctx.helper.getHelpData())
    ctx.body = '你好hi, egg' + url
    console.log('============================')
  }

  async news() {
    const {
      ctx,
    } = this
    ctx.body = '你好hi, news'
  }
}

module.exports = HomeController
