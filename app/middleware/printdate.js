'use strict'
// 定义一个中间件
// options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
// app: 当前应用 Application 的实例。

// 如果要使用，需要配置config
module.exports = (options, app) => {
  console.log(options)
  // 返回一个异步方法
  return async function printDate(ctx, next) {
    console.log(new Date())
    await next()
  }
}
