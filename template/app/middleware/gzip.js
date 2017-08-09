const zlib = require('zlib');
/**
 * data Gzip handler
 */
module.exports = () => {
	return async(ctx, next) => {
		
		await next();

		let acceptEncoding = ctx.headers['accept-encoding'];
		//let defalate = zlib.deflate;
		//gzip encoding head
		ctx.set({
			'Content-Type': 'application/json;charset=utf-8'
		});
		if (/\bgzip\b/.test(acceptEncoding)) {
			ctx.set({
				'Content-Encoding': 'gzip'
			});
			if (Object.prototype.toString.call(ctx.body) === '[object Object]'){
				ctx.body = JSON.stringify(ctx.body);
			}
			// gzip
			let buf = await zlib.gzipSync(ctx.body);
			ctx.body = buf;
			
		} else if (acceptEncoding.match(/\bdeflate\b/)) {
			ctx.set({
				'Content-Encoding': 'deflate'
			});
			// deflate
			let buf = await zlib.deflateSync(ctx.body);
			if (ctx.body){
				ctx.body = buf;
			}
			
		}
	}
};