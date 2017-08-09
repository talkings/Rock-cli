const jwt = require('jsonwebtoken');
const auth = require('../../config/auth-config.js');

/**
 * 请求权限鉴定
 */
module.exports = async (ctx, next) => {
	
	//过滤path
	if (ctx.req.url.indexOf('users') > -1) {
		try {
			let decoded = jwt.verify('111111111111111', auth.secret);
			if (!decoded){
				ctx.body = {
					'data' : null,
					'code' : 201
				};
			}
		} catch (e){
			ctx.body = e;
		}
		
		
	} else {
		await next();
	}

//	console.log(ctx.body)
//	ctx.success({}, 'success');
//	
//	
//	console.log(token);
//	/**
//	 * 效验口令
//	 * @return 存储的相关信息
//	 */
//	let decoded = jwt.verify(token, 'shhhhh');
//	console.log(decoded);
//	
//	
//	/**
//	 * 返回解码的有效载荷，而不验证签名是否有效。
//	 */
//	let decodeds = jwt.decode(token, {
//		complete : true
//	});
//	console.log(decodeds);
};
