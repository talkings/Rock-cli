//MYSQL 对象关系映射
const model = require('../models');
const { tools_proxy } = require('../utils/');

class Product {
	/**
	 * 查询用户信息
	 */
	static async getUserInfo ( ctx ) {
		const data = await model.user.findAll({
			'attributes' : ['id']
		});
		return data;
	}
	
	static async geProxytUserInfo ( ctx ) {
		const fn = new tools_proxy({});
		const data = await fn.request();
		return data; 
	}
	
	/**
	 * 创建用户信息
	 */
	static async addUserInfo ( ctx ) {
		const data = await model.user.create({
			'username' : 'username',
			'password' : 123456
		});
		return data;
	}
	
	/**
	 * 修改用户信息
	 */
	static async setUserInfo ( ctx ) {
		let result = null;
		const data = await model.user.findOne({
			'attributes': ['id', 'username'],
			'where' : {
				'id' : 1
			}
		});
		data.username = 'qianxiang.fang';
		result = await data.save();
		return result;
	}
	
}



module.exports = Product;