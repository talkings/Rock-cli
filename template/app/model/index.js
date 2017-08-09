const Sequelize = require('sequelize');
const { mysql } = require('../../config/config-db');
const fs = require('fs');
const path = require('path');

/**
 * MYSQL CONNECT
 */

//创建实例
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    'host' : mysql.host,
    'dialect' : 'mysql',
    'pool' : {
        'max' : 5,
        'min' : 0,
        'idle' : 30000
    }
});
const db = {};

//测试连接
sequelize.authenticate().then((err) => {
    if (err) {
        console.log(err);
    }
    console.log('mysql Connection has been established successfully.');
}).catch((err) => {
    console.log('mysql Unable to connect to the database:' + err);
});

//读取文件目录
fs.readdirSync(path.join(__dirname, './schema')).filter(function (file) {
    return (file.indexOf('.') !== 0);
}).forEach(function (file) {
    let model = sequelize['import'](path.join(__dirname, './schema/'+ file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});
//数据表不存在的情况下自动创建数据表
sequelize.sync();

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;