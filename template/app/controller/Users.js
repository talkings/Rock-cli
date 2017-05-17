//MYSQL 对象关系映射
const model = require('../models');
const { tools_token, tools_res } = require('../utils/');

const User = {
	/**
	 * 查询用户信息
	 */
	async getUserInfo ( ctx ) {
		try {
			//console.log(ctx.token({user: '123'}))
			const data = await model.user.findAll({
				'attributes' : ['id']
			});
			tools_res.success(ctx, data, 'success');
		} catch (e){
			tools_res.error(ctx, 500, e);
		}
	},
	
	async geProxytUserInfo ( ctx ) {
		try {
			const fn = new ctx.Proxy({});
			const data = await fn.request();
			tools_res.success(data, 'success');
		} catch (e){
			tools_res.error(500, e);
		}
	},
	
	/**
	 * 创建用户信息
	 */
	async addUserInfo ( ctx ) {
		try {
			const data = await model.user.create({
				'username' : 'username',
				'password' : 123456
			});
			tools_res.success(ctx, data, 'success');
		} catch (e){
			tools_res.error(ctx, 500, e);
		}
	},
	
	/**
	 * 修改用户信息
	 */
	async setUserInfo ( ctx ) {
		let result = null;
		try {
			const data = await model.user.findOne({
				'attributes': ['id', 'username'],
				'where' : {
					'id' : 1
				}
			});
			data.username = 'qianxiang.fang';
			result = await data.save();
			tools_res.success(ctx, result, 'success');
			
		} catch (e){
			tools_res.error(ctx, 500, e);
		}
	}
};


module.exports = User;