import fs from 'fs';
import tools from '../utils/tools.js';

const controller = {};
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
			//继承工具类
			for(let key in child_model){
				if(typeof(child_model[key]) === 'function'){
					child_model[key] = child_model[key].bind( Object.freeze(tools) );
				};
			};
			controller[name] = child_model;
		}
	}
});	
export default  controller;