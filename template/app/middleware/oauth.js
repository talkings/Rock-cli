
/**
 * 请求权限鉴定
 */
export default async (ctx, next) => {
	
//	/**
//	 * 挂载生成token方法
//	 * @param data 存储数据
//	 * @param expiresIn 到期时间
//	 * @return new token
//	 */
//	ctx.token = (data, expiresIn) => {
//		/**
//		 * 生成口令
//		 * @存储的相关信息
//		 * @秘钥
//		 * @加密算法
//		 */
//		try {
//			let token = jwt.sign(data, auth.secret, { 
//				'algorithm' : auth.algorithm,
//				//到期时间1小时
//				'expiresIn' : expiresIn || '7d'
//			});
//			return token;
//		} catch (e){
//			ctx.error(500, e);
//		}
//		
//	};
//	/**
//	 * 效验token
//	 * @paran token
//	 */
//	ctx.checkToken = (token) => {
//		try {
//			let decoded = jwt.verify(token, auth.secret);
//			return decoded;
//		} catch (e) {
//			ctx.error(500, e);
//		}
//		
//	};
	
	await next();
	
	//过滤path
//	if (ctx.req.url.indexOf('users') > -1) {
//		
//	}


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
