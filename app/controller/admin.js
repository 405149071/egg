'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async echo() {
        this.ctx.body = '哈哈哈，新控制器';
    }
}

module.exports = AdminController;