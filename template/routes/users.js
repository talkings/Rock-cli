import router from 'koa-router';
import handler from '../model/handler-user';

//定义根路由
const routers = new router({
  'prefix' : '/users'
});

routers.get('/search', handler.getUserInfo)
	.post('/create', handler.addUserInfo)
	.put('/update',  handler.setUserInfo);

module.exports = routers;