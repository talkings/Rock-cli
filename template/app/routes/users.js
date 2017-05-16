const router = require('koa-router');
const { Users } = require('../controller/');

//定义根路由
const routers = new router({
	'prefix': '/users'
});

routers.get('/search', Users.getUserInfo)
	.get('/proxy', Users.geProxytUserInfo)
	.post('/create', Users.getUserInfo)
	.put('/update', Users.setUserInfo);

module.exports = routers;