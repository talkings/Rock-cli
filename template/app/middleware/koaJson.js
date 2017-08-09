const json = require('koa-json');
const convert = require('koa-convert');
module.exports = () => {
    return convert(json());
};