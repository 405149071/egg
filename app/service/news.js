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

  //  获取爬虫数据
  async getSpiderNews() {
    const api = this.config.spiderUrl + 'appapi.php?a=getPortalList&catid=20&page=1'
    // curl的方法可以获取远程数据
    const response = await this.ctx.curl(api)
    // console.log(response) 数据在response.data
    const data = JSON.parse(response.data)
    // console.log(data)  数据在data.result里
    return data.result
  }
}

module.exports = NewsService
