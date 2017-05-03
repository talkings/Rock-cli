import router from "koa-router";
//MYSQL 对象关系映射
import db from "../model/mysql";

//定义根路由
var routers = new router({
  prefix: '/users'
});

routers.get('/search', async(ctx, next) => {
	try {
		const data = await db.user.findAll({
			attributes: ['id']
		});
		ctx.success(data, "success");
	} catch(e) {
		ctx.error(500, e);
	}

}).get('/create', async(ctx, next) => {
	try {
		const data = await db.user.create({
			username: "username",
			password: 123456
		});
		ctx.success(data, "success");
	} catch(e) {
		ctx.error(500, e);
	}

}).get('/update', async(ctx, next) => {
	try {
		const data = await db.user.findOne({
			  attributes: ['id', 'username'],
				where : {
					 id : 1
				}
		});
		data.username = "海贼王";
		data = await data.save();
		ctx.success(data, "success");
	} catch(e) {
		ctx.body = e;
	}

})
module.exports = routers;