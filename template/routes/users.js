import router from 'koa-router';
import { Users } from '../model/';

//定义根路由
const routers = new router({
  'prefix' : '/users'
});

routers.get('/search', async ( ctx ) => {
		const data = await Users.getUserInfo(ctx);
		ctx.success(data, 'success');
	})
	.post('/create', async ( ctx ) => {
		const data = await Users.getUserInfo(ctx);
		ctx.success(data, 'success');
	})
	.put('/update',  async ( ctx ) => {
		const data = await Users.setUserInfo(ctx);
		ctx.success(data, 'success');
	});

module.exports = routers;