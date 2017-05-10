import router from 'koa-router';
import { users } from '../model/';

//定义根路由
const routers = new router({
  'prefix' : '/users'
});

routers.get('/search', users.getUserInfo)
	.post('/create', users.addUserInfo)
	.put('/update',  users.setUserInfo);

module.exports = routers;