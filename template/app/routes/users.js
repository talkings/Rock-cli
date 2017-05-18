const router = require('koa-router');
const { Users } = require('../controller/');

//定义根路由
const routers = new router({
	'prefix': '/users'
});

routers.get('/search', async ( ctx ) => {
	const data = await Users.getUserInfo( ctx );
	ctx.throw(data, 'success');
})
	.get('/proxy', async ( ctx ) => {
		const data = await Users.geProxytUserInfo( ctx );	
		ctx.throw(data, 'success');
	})
	.post('/create', async ( ctx ) => {
		const data = await Users.getUserInfo( ctx );
		ctx.throw(data, 'success');
	})
	.put('/update', async ( ctx ) => {
		const data = await Users.setUserInfo( ctx );
		ctx.throw(data, 'success');	
	});

module.exports = routers;