module.exports = () => {
	return async (ctx, next) => {
		/**
		 * 返回报文模板
		 */
		ctx.success = (result, msg ) => {
			ctx.body = {
				'code' : 200,
				'data' : result,
				'msg' : msg || ''
			};
		};
			
		ctx.error = (code, msg ) => {
			ctx.body = {
				'code' : code,
				'data' : null,
				'msg' : msg || ''
			};
		};

		ctx.throw = (result) => {
			if (!result) {
				ctx.error(201, 'error');
			} else {
				ctx.success(result, 'success');
			}
		};
		await next();
	};
}; 

