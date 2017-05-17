//MYSQL 对象关系映射
const model = require('../models');

class Product {
	
	constructor (){
		this.a = 1;
	}
	/**
	 * 查询用户信息
	 */
	async getUserInfo ( ctx ) {
		
		console.log(ctx)
		console.log(this.a)
		try {
			//console.log(ctx.token({user: '123'}))
			const data = await model.user.findAll({
				'attributes' : ['id']
			});
			this.tools_res.success(ctx, data, 'success');
		} catch (e){
			this.tools_res.error(ctx, 500, e);
		}
	}
	
	async geProxytUserInfo ( ctx ) {
		try {
			const fn = new ctx.Proxy({});
			const data = await fn.request();
			this.tools_res.success(data, 'success');
		}catch(e){
			this.tools_res.error(500, e);
		}
	}
	
	/**
	 * 创建用户信息
	 */
	async addUserInfo ( ctx ) {
		try {
			const data = await model.user.create({
				'username' : 'username',
				'password' : 123456
			});
			this.tools_res.success(ctx, data, 'success');
		} catch (e){
			this.tools_res.error(ctx, 500, e);
		}
	}
	
	/**
	 * 修改用户信息
	 */
	async setUserInfo ( ctx ) {
		let data = null, result = null;
		try {
			const data = await model.user.findOne({
				'attributes': ['id', 'username'],
				'where' : {
					'id' : 1
				}
			});
			data.username = 'qianxiang.fang';
			result = await data.save();
			this.tools_res.success(result, 'success');
			
		} catch (e){
			this.tools_res.error(500, e);
		}
	}
	
}



module.exports = Product;