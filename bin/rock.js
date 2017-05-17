#!/usr/bin/env node

var program = require("commander");
var path = require("path");
var fs = require('fs');
var copy = require('copy');
var colors = require('colors');
//fs 扩展支持promise
fsToPromise(['readdir', 'mkdir', 'exists', 'stat']);

colors.setTheme({  
    silly: 'rainbow',  
    input: 'grey',  
    verbose: 'cyan',  
    prompt: 'red',  
    info: 'green',  
    data: 'blue',  
    help: 'cyan',  
    warn: 'yellow',  
    debug: 'magenta',  
    error: 'red'  
});

program
	.allowUnknownOption()//取消自动报错机制
	.option('-h, --help', 'help information', helpInformation)
	.option('-a, --add <name>', 'create project', createProject)
	.option('-v --version', 'version information', getVersion)
	//处理定义的option和sub-command, 解析命令行参数并触发相应的回调
	.parse(process.argv);

//mkdirp 
function helpInformation() {
	console.log('options:');
	console.log('');
	console.log('-v --version             print Rock version ');
	console.log('-a --add <project name>  create project');
	console.log('');
};

/**
 * fs api support promise
 * @param {Object} methods
 */
function fsToPromise(methods){
	methods.forEach((item)=>{
		global[item] = function(path){
			return new Promise((resolve, reject)=>{
				if(item === "exists"){
					fs[item](path, (dst)=>{
						resolve(dst);
					})		
				}else{
					fs[item](path, (err, dst)=>{
						if(err){
							reject(err);
							return false;
						};
						resolve(dst);
					})	
				}
				
			});
		}
	});
};

//文件夹复制
function copyForder(fromPath, toPath) {
	/*
	 * 复制目录中的所有文件包括子目录
	 * @param{ String } 需要复制的目录
	 * @param{ String } 复制到指定的目录
	 */

	var copy = function(src, dst) {
		
		// 读取目录中的所有文件/目录
		return global.readdir(src).then((paths)=>{
			let files = paths.map(function(path) {
				var _src = src + '/' + path,
					_dst = dst + '/' + path,
					readable, writable;
				return global.stat(_src).then((st) => {
						console.log("create :	".green +_dst);
						// 判断是否为文件
						if(st.isFile()) {
							// 创建读取流
							readable = fs.createReadStream(_src);
							// 创建写入流
							writable = fs.createWriteStream(_dst);
							// 通过管道来传输流
							readable.pipe(writable);
						}
						// 如果是目录则递归调用自身
						else if(st.isDirectory()) {
							return exist(_src, _dst, copy);
						}
					}).catch((err)=>{
						console.log("error:	"+err);
					})
			});
			return Promise.all(files)
			//process.abort();
			//console.log('END'.yellow);
		}).catch((err)=>{
			console.log("error:	"+err);
		})
	};

	// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
	var exist = function(src, dst, callback) {
		return global.exists(dst).then((exists)=>{
			// 已存在
			if(exists) {
				return callback(src, dst).then(()=>{})
			}
			// 不存在
			else {
				return global.mkdir(dst).then(()=>{
					return callback(src, dst).then(()=>{})
				});
			}
		}).catch((err)=>{
			console.log("error:	"+err);
		});
	};
	
	//process.abort();
	//console.log("create :	".green+toPath)
	// 复制目录
	exist(fromPath, toPath, copy).then(()=>{
		//监听操作成功]
		console.log("");
		console.log("Project to create success".yellow);
		//进程中断
		process.abort();
		
	})
}

/**
 * 创建脚手架
 * @param {string} projectname
 */
function createProject(projectname) {
	var s = global.mkdir(path.resolve(process.cwd() + "/" + projectname)).then((data)=>{
		//导出文件源目录
		let from_path = path.resolve(__dirname, '../template/');
		//输出目录
		let to_path = path.resolve(process.cwd() + "/" + projectname+"/");
		copyForder(from_path, to_path);
	}).catch((err)=>{
		console.log("error:	"+err);
	});
}

/**
 * 查看版本号
 */
function getVersion() {
	console.log("v0.0.8");
}