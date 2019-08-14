'use strict'
module.exports = app => {
  app.once('server', server => {
    // websocket
    console.log('server', server)
  })
  app.on('error', (err, ctx) => {
    // report error
    console.log('error', err)
  })
  app.on('request', ctx => {
    // log receive request
    console.log('ctx', ctx)
  })
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    console.log('response')
    const used = Date.now() - ctx.starttime
    // log total cost
  })
}
