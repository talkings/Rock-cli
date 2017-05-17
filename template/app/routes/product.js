const router = require('koa-router');
const { Product } = require('../controller/');

//定义根路由
const routers = new router({
	'prefix': '/product'
});

routers.get('/search', Product.getUserInfo)
	.get('/proxy', Product.geProxytUserInfo)
	.post('/create', Product.getUserInfo)
	.put('/update', Product.setUserInfo);

module.exports = routers;