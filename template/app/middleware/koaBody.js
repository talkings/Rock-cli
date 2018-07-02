const koaBody = require('koa-body');
module.exports = () => {
    return koaBody({
        "formLimit": "10mb",
        "jsonLimit": "10mb",
        "textLimit": "10mb"
    });
};