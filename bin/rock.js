#!/usr/bin/env node

var program = require("commander");
var path = require("path");
var fs = require('fs');
var copy = require('copy');
var colors = require('colors');

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

//文件夹复制
function copyForder(fromPath, toPath) {
	/*
	 * 复制目录中的所有文件包括子目录
	 * @param{ String } 需要复制的目录
	 * @param{ String } 复制到指定的目录
	 */

	var copy = function(src, dst) {
		// 读取目录中的所有文件/目录
		fs.readdir(src, function(err, paths) {
			if(err) {
				throw err;
			};
			paths.forEach(function(path) {
				var _src = src + '/' + path,
					_dst = dst + '/' + path,
					readable, writable;
				fs.stat(_src, function(err, st) {
					if(err) {
						throw err;
					}
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
						exists(_src, _dst, copy);
					}
				});
			});
		});
	};

	// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
	var exists = function(src, dst, callback) {
		fs.exists(dst, function(exists) {
			// 已存在
			if(exists) {
				callback(src, dst);
			}
			// 不存在
			else {
				fs.mkdir(dst, function() {
					callback(src, dst);
				});
			}
		});
	};
	
	
	
	// 复制目录
	exists(fromPath, toPath, copy);
}

/**
 * 创建脚手架
 * @param {string} projectname
 */
function createProject(projectname) {
	fs.mkdir(path.resolve(process.cwd() + "/" + projectname), 0777, function(err) {
		if(err) {
			console.log(err);
		} else {
			
			//导出文件源目录
			let from_path = path.resolve(__dirname, '../template/');
			//输出目录
			let to_path = path.resolve(process.cwd() + "/" + projectname+"/");
			//监听文件夹变化
			watchfile(to_path);
			copyForder(from_path, to_path);
		}
	})
}

function watchfile(file){
	fs.watch(file, function(err, filename){
		console.log("create :  ".green + filename);
	})
};
/**
 * 查看版本号
 */
function getVersion() {
	console.log("v0.0.1");
}