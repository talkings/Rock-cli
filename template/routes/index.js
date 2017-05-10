import fs from 'fs';

module.exports  = (app) => {
	//读取目录下文件列表
	const fileList = fs.readdirSync( __dirname );
	//遍历注册路由
	fileList.forEach(( item ) => {
		//过滤文件
		if (/.js+$/.test(item) && item.indexOf('index') < 0){
			//注册路由
			let child_router = require(__dirname +'/'+ item);
			app.use(child_router.routes(), child_router.allowedMethods());
		}
	});
	return async ( ctx, next ) => {	
		await next();
	};
};
