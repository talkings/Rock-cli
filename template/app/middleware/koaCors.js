const cors = require('koa2-cors');
module.exports = (option) => {
    return cors(option);
};