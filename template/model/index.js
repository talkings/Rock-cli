import fs from 'fs';

const models = {};
//读取目录下文件列表
const fileList = fs.readdirSync( __dirname );
//遍历注册路由
fileList.forEach(( item ) => {
	//过滤文件
	if (/.js+$/.test(item) && item.indexOf('index') < 0){
		//提取处理函数
		let child_model = require(__dirname +'/'+ item);
		if (item.indexOf('.') > -1){
			let filename = item.split('.')[0];
			models[filename] = child_model;
		}
	}
});	
export default  models;