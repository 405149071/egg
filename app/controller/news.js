'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async echo() {
    this.ctx.body = '哈喽，news';
  }
}

module.exports = NewsController;
