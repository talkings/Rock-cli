export default async ( ctx, next ) => {
	ctx.success = ( result, msg ) => {
		ctx.body = {
			'code' : 200,
			'data' : result,
			'msg' : msg || ''
		};
	};
	ctx.error = ( code, msg ) => {
		ctx.body = {
			'code' : code,
			'data' : null,
			'msg' : msg || ''
		};
	};
	await next();
};
