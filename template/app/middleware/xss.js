/**
 * 拦截请求过滤xss攻击
 */
const helmet = require("koa-helmet");
module.exports = ()=> {
    return helmet();
};