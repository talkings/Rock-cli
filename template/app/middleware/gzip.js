const zlib = require('zlib');
/**
 * data Gzip handler
 */
module.exports = () => {
	return async (ctx, next) => {

		await next();

		let acceptEncoding = ctx.headers['accept-encoding'];
		//gzip encoding head
		if (!ctx.response.headers['content-type']){
			ctx.set({
				'Content-Type': 'application/json;charset=utf-8;'
			});
		}
		if (!ctx.body) {
			ctx.status = 404;
			return false;
		}
		if (/\bgzip\b/.test(acceptEncoding)) {
			ctx.set({
				'Content-Encoding': 'gzip'
			});
			if (Object.prototype.toString.call(ctx.body) === '[object Object]') {
				ctx.body = JSON.stringify(ctx.body);
			}
			//保存真实长度
			ctx.realLenth = Buffer.byteLength(ctx.body, 'utf8');
			// gzip
			let buf = await zlib.gzipSync(ctx.body);
			ctx.body = buf;

		} else if (/\bdeflate\b/.test(acceptEncoding)) {
			ctx.set({
				'Content-Encoding': 'deflate'
			});
			// deflate
			let buf = await zlib.deflateSync(ctx.body);
			if (ctx.body) {
				ctx.body = buf;
			}

		}
	}
};
