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

  // 登录判定
  async loginCheck() {
    // http://127.0.0.1:7002/dailylogin?username=wuzz&password=111
    // this.ctx.body = '登录检测中。。。'
    const data = {
      username: 'wuzz',
      password: '111',
    }

    const param = this.ctx.query

    let message = ''
    if (param.username !== data.username) {
      message = '用户不存在'
    } else if (param.password !== data.password) {
      message = '密码不正确'
    } else {
      message = '登录成功'
    }
    this.ctx.body = message
  }

  async news() {
    const {
      ctx,
    } = this
    ctx.body = '你好hi, news'
  }
}

module.exports = DailyController
