'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this
    const url = this.config.spiderUrl
    ctx.body = '你好hi, egg' + url
  }

  async news() {
    const {
      ctx,
    } = this
    ctx.body = '你好hi, news'
  }
}

module.exports = HomeController
