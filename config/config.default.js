/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565683925598_4013'

  // add your middleware config here
  config.middleware = [ 'printdate', 'forbidip' ]
  // 中间件传参数
  config.printdate = {
    aaa: 'aaaaaa',
  }
  // 配置模版引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  }
  config.spiderUrl = 'http://www.phonegap100.com/'
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
