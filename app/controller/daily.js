'use strict'

const Controller = require('egg').Controller

class DailyController extends Controller {
  async index() {
    const {
      ctx,
    } = this

    ctx.body = {
      name: 'kevin',
      age: 18,
    }

  }

  async news() {
    const {
      ctx,
    } = this
    ctx.body = '你好hi, news'
  }
}

module.exports = DailyController
