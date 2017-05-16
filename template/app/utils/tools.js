import jwt from 'jsonwebtoken';
import auth from '../../config/auth-config.js';

const tools_token = {
	/**
	 * 挂载生成token方法
	 * @param data 存储数据
	 * @param expiresIn 到期时间
	 * @return new token
	 */
	createToken : (ctx, data, expiresIn) => {
		/**
		 * 生成口令
		 * @存储的相关信息
		 * @秘钥
		 * @加密算法
		 */
		try {
			let token = jwt.sign(data, auth.secret, { 
				'algorithm' : auth.algorithm,
				//到期时间1小时
				'expiresIn' : expiresIn || '7d'
			});
			return token;
		} catch (e){
			ctx.error(500, e);
		}
		
	},
	
	/**
	 * 效验token
	 * @paran token
	 */
	checkToken : (ctx, token) => {
		try {
			let decoded = jwt.verify(token, auth.secret);
			return decoded;
		} catch (e) {
			ctx.error(500, e);
		}
		
	}
};

/**
 * 返回报文模板
 */
const tools_res = {
	
	success : (ctx, result, msg ) => {
		ctx.body = {
			'code' : 200,
			'data' : result,
			'msg' : msg || ''
		};
	},
	
	error : (ctx,  code, msg ) => {
		ctx.body = {
			'code' : code,
			'data' : null,
			'msg' : msg || ''
		};
	}
}
export default {
	tools_token, tools_res
}
