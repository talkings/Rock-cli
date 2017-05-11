//MYSQL 对象关系映射
import db from '../db';

const User = {};
/**
 * 查询用户信息
 */
User.getUserInfo = async ( ctx ) => {
	try {
		const data = await db.user.findAll({
			'attributes' : ['id']
		});
		return data;

	} catch (e) {
		ctx.error(500, e);
	}

};

/**
 * 创建用户信息
 */
User.addUserInfo = async( ctx ) => {
	try {
		const data = await db.user.create({
			'username' : 'username',
			'password' : 123456
		});
		return data;

	} catch (e) {
		ctx.error(500, e);
	}
};

/**
 * 修改用户信息
 */
User.setUserInfo =  async( ctx ) => {
	try {
		const data = await db.user.findOne({
			'attributes': ['id', 'username'],
			'where' : {
				'id' : 1
			}
		});
		data.username = 'qianxiang.fang';
		let result = await data.save();
		return result;
		
	} catch (e) {
		ctx.body = e;
	}

};



export default User;