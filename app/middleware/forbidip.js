'use strict'

module.exports = (options, app) => {

  // 返回一个异步方法
  return async function forbidIp(ctx, next) {
    console.log(new Date())
    // 屏蔽ip
    const forbidip = '192.168.0.107'
    // 获取客户端ip
    // console.log(ctx.request.ip)
    if (ctx.request.ip === forbidip) {
      ctx.status = 403
      ctx.body = '您的ip被屏蔽'
    } else {
      await next()
    }

  }
}
