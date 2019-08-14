'use strict'

// 第1种方法，从配置中取参数
module.exports = (options, app) => {

  // 返回一个异步方法
  return async function forbidIp(ctx, next) {
    // 屏蔽ip
    console.log(options)

    const clientip = ctx.request.ip

    // eslint-disable-next-line array-callback-return
    const hasIp = options.forbidips.some(val => {
      if (val === clientip) {
        return true
      }
    })

    if (hasIp) {
      ctx.status = 403
      ctx.body = '您的ip被屏蔽'
    } else {
      await next()
    }

  }
}


// 第2种方法，从db中取屏蔽第ip
// module.exports = (options, app) => {

//   // 返回一个异步方法
//   return async function forbidIp(ctx, next) {
//     // 屏蔽ip
//     const forbidip = '192.168.0.107'
//     // 获取客户端ip
//     // console.log(ctx.request.ip)
//     if (ctx.request.ip === forbidip) {
//       ctx.status = 403
//       ctx.body = '您的ip被屏蔽'
//     } else {
//       await next()
//     }

//   }
// }