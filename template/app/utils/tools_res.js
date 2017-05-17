/**
 * 返回报文模板
 */
const tools_res = {
	
	'success' : (ctx, result, msg ) => {
		ctx.body = {
			'code' : 200,
			'data' : result,
			'msg' : msg || ''
		};
	},
	
	'error' : (ctx,  code, msg ) => {
		ctx.body = {
			'code' : code,
			'data' : null,
			'msg' : msg || ''
		};
	}
}
module.exports = tools_res;
