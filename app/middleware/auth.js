'use strict'


module.exports = options => {

  console.log(options)
  // 返回一个异步方法
  return async function auth(ctx, next) {
    ctx.state.csrf = ctx.csrf
    await next()
  }
}
