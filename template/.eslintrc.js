const os = require("os");
let platform = os.platform() === "darwin" ? "unix" : "windows";
module.exports = {
    "env": {
        "node": true,
        //支持除模块外所有 ECMAScript 6 特性
        "es6" : true,
        //MongoDB 全局变量
        "mongo" : true
    },
    "extends": "eslint:recommended",
    //解析器选项
    "parserOptions" : {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "parser": "babel-eslint",
    "plugins" : [],
    //设置全局变量只读
    "globals" : {
        "Promise": false,
        "global": false
    },
    "rules": {
        "arrow-spacing" : ["error", { "before": true, "after": true }],
        //要求箭头函数体使用大括号
        "arrow-body-style" : 2,    
        //禁止对只读的全局变量进行修改
        "no-global-assign": 2,
        "arrow-parens" : 2,
        //禁止 function 定义中出现重名参数
        "no-dupe-args" : 2,
        //禁用 console
        "no-console" : 0,
        //禁止条件表达式中出现赋值操作符
        "no-cond-assign" : 0,
        //要求或禁止末尾逗号
        "comma-dangle" : 0,
        //要求对象字面量属性名称用引号括起来
        "quote-props" : 2,
        //强制使用一致的反勾号、双引号或单引号
        "quotes" : ["error", "single"],
        //强制在关键字前后使用一致的空格
        "keyword-spacing" : ['error', { "before": true }],
        "linebreak-style": ["error", platform],
        //要求或禁止使用分号而不是 ASI
        "semi": 2,
        //禁止不必要的分号
        "no-extra-semi" : 2,
        // 禁用的规则从基本配置
        "no-console": "off",
        //要求使用 let 或 const 而不是 var
        "no-var" : 2    
    }
};