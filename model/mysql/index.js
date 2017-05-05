import Sequelize from 'sequelize';
import Config from './config';
import fs from 'fs';
import path from 'path';

/**
 * MYSQL CONNECT
 */

//创建实例
const sequelize = new Sequelize(Config.database, Config.username, Config.password, {
    'host' : Config.host,
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

fs.readdirSync(__dirname + '/schema').filter(function (file) {
    return (file.indexOf('.') !== 0);
}).forEach(function (file) {
    let model = sequelize['import'](path.join(__dirname + '/schema', file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;