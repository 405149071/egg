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
  config.middleware = [ 'printdate', 'forbidip', 'auth' ]
  // 中间件传参数
  config.printdate = {
    aaa: 'aaaaaa',
  }
  config.forbidip = {
    forbidips: [ '127.0.0.2', '192.168.0.17' ],
  }

  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  }

  // 配置db
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'daily',
    username: 'root',
    password: 'root',
    define: { // model的全局配置
      timestamps: true, // 添加create，update,delete时间戳
      paranoid: true, // 软删除
      freezeTableName: true, // 防止修改表明为复数
      underscored: false, // 防止驼峰被默认转下划线
    },
    timezone: '+8:00', // 由于orm用的utc时间，必须要加东八区
    dialectOptions: { // 读取的datetime类型返回字符串，而不是utc
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
    },
  }

  // 配置session
  // 默认值
  // exports.session = {
  //   key: 'EGG_SESS',
  //   maxAge: 24 * 3600 * 1000, // 1 天
  //   httpOnly: true,
  //   encrypt: true,
  // };
  config.session = {
    key: 'SESSION_ID',
    maxAge: 1800 * 1000,
    renew: true, // 每次访问页面，都延长session时间
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
