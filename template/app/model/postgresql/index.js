const Sequelize = require('sequelize');
const path = require('path');
const { postgresql } = require(path.join(process.cwd(), './config/config-db'));
const fs = require('fs');
/**
 * postgresql CONNECT
 */
//创建实例
console.log(`postgres://${postgresql.username}:${postgresql.password}@${postgresql.host}:${postgresql.port}/${postgresql.database}`);
let sequelize = new Sequelize(`${postgresql.database}`, postgresql.username, postgresql.password, {
    'host': postgresql.host,
    'port': postgresql.port,
    'dialect': 'postgres',
    'protocol': 'postgres',
    'quoteIdentifiers': true,
    //'logging': false,
    'pool': {
        'maxConnections': 120,
        'minConnections': 0,
        'maxIdleTime': 30000
    }
});
const db = {};

//测试连接
sequelize.authenticate().then((err) => {
    if (err) {
        console.log(err);
    }
    console.log('\x1B[36m%s\x1B[0m', 'postgresql Connection has been established successfully.');
}).catch((err) => {
    console.log('postgresql Unable to connect to the database:' + err);
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
sequelize.sync({
    hooks : true
});
sequelize.addHook('afterBulkSync', function ( options ){
    console.log('\x1B[36m%s\x1B[0m', '数据库同步成功');
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;