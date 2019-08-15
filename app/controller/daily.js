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
    // const data = {
    //   username: 'wuzz',
    //   password: '111',
    // }
    // 改从db中取 (测试db可用) 联合查询
    // const data = await this.ctx.model.User.findAll({
    //   include: {
    //     model: this.ctx.model.Daily,
    //   },
    // })
    // console.log('用户数据', data)
    // this.ctx.body = data
    const param = this.ctx.query
    console.log('登录的参数', param)
    let message = ''
    // 取数据
    const user = await this.ctx.model.User.findOne({
      where: {
        name: param.username,
      },
    })

    if (!user) {
      message = '用户不存在'
    } else if (param.password !== user.password) {
      message = '密码不正确'
    } else {
      message = '登录成功'
    }
    this.ctx.body = message
  }
  // 添加日记内容
  async add() {
    // 从前端获取post请求发送过来的数据
    const param = this.ctx.request.body
    // console.log('添加的参数：', param)
    // this.ctx.body = param
    // 加入到db
    const result = await this.ctx.model.Daily.create({
      title: param.title,
      content: param.content,
      user_id: 2,
    })
    if (result) {
      this.ctx.body = '创建成功'
    } else {
      this.ctx.body = '创建失败'
    }

    // this.ctx.body = '你好hi, news'
  }
}

module.exports = DailyController
