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

    // 设置cookie  // 默认不能设置中文值(设置加密encrypt以后可以使用中文)
    // 如果cookie设置对象需要用JSON.stringfy转换成字符串，取值的时候再转换一下
    this.ctx.cookies.set('username', 'zhangsan')
    this.ctx.cookies.set('sex', 'nv', {
      maxAge: 1000 * 3600 * 24, // 一天
      httpOnly: true, // 只能在http端访问，不允许js
      signed: true, // 默认true ，是否签名
      encrypt: true, // 默认false  是否加密，如果加密以后，取值时需要解密

    })
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