'use strict'

const Service = require('egg').Service

class NewsService extends Service {
  async getNewsList() {
    // 调用另一个service的方法
    const name = await this.service.user.getUserInfo()
    // 本service的数据
    const list = [ '111a', '222b', '3333c', name ]
    return list
  }
}

module.exports = NewsService
