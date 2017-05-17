const fs = require('fs');
const tools = require('../utils/tools.js');

let controller = {};
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
			//判断对象是否为构造函数
			if(typeof(child_model) === "function"){
				let fn = new child_model();
				controller[name] = fn;
				
			} else if (typeof(child_model) === "object") {
				//继承工具类
				for(let key in child_model){
					if(typeof(child_model[key]) === 'function'){
						child_model[key] = child_model[key].bind( Object.freeze(tools) );
					};
				};
				controller[name] = child_model;
			}
			
		}
	}
});	
module.exports = controller;