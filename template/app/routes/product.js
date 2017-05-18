const router = require('koa-router');
const { Product } = require('../controller/');

//定义根路由
const routers = new router({
	'prefix': '/product'
});

routers.get('/search', async ( ctx ) => {
	const data = await Product.getUserInfo( ctx );
	ctx.throw(data);
})
	.get('/proxy', async ( ctx ) => {
		const data = await Product.geProxytUserInfo( ctx );	
		ctx.throw(data, 'success');
	})
	.post('/create', async ( ctx ) => {
		const data = await Product.getUserInfo( ctx );
		ctx.throw(data, 'success');
	})
	.put('/update', async ( ctx ) => {
		const data = await Product.setUserInfo( ctx );
		ctx.throw(data, 'success');	
	});

module.exports = routers;