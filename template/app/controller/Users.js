//MYSQL 对象关系映射
const model = require('../models');
const { tools_proxy } = require('../utils/');

const User = {
	/**
	 * 查询用户信息
	 */
	getUserInfo ( ctx ) {
		const data = model.user.findAll({
			'attributes' : ['id']
		});
		return data;
	},
	
	geProxytUserInfo ( ctx ) {
		const fn = new tools_proxy({});
		const data = fn.request();
		return data; 
	},
	
	/**
	 * 创建用户信息
	 */
	addUserInfo ( ctx ) {
		const data = model.user.create({
			'username' : 'username',
			'password' : 123456
		});
		return data;
	},
	
	/**
	 * 修改用户信息
	 */
	async setUserInfo ( ctx ) {
		let result = null;
		const data = await model.user.findOne({
			'attributes': ['id', 'username'],
			'where' : {
				'id' : 1
			}
		});
		data.username = 'qianxiang.fang';
		result = data.save();
		return result;
	}
};


module.exports = User;