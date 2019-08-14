'use strict'

// 安装第三方库 silly-datetime

module.exports = {
  // 模版里可以直接调用
  formatDate() {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    const sd = require('silly-datetime')
    // 需要使用一个日期时间，格式为 20150920110632
    // 如果时间传过来的不是13位，是10位的话，需要*1000
    return sd.format(new Date(), 'YYYY-MM-DD HH:mm')
  },

  getHelpData() {
    return '我是helper里的数据'
  },
}
