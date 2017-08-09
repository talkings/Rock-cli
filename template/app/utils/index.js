const fs = require('fs');

let utils = {};
//读取目录下文件列表
const fileList = fs.readdirSync( __dirname );
//遍历注册路由
fileList.forEach(( filename ) => {
	//过滤文件
	if (/.js+$/.test( filename ) && filename.indexOf('index') < 0){
		//提取处理函数
		let child_model = require(__dirname +'/'+ filename);
		if (filename.indexOf('.') > -1){
			let name = filename.split('.')[0];
			utils[name] = child_model;
			
		}
	}
});	
module.exports = utils;