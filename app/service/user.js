'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async getUserInfo() {
    return '张三'
  }
}

module.exports = UserService
