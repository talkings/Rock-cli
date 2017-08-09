const Sequelize = require('sequelize');
const { mysql } = require('../../config/db-config');
const fs = require('fs');
const path = require('path');
const mock = require('./mock');
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

fs.readdirSync(path.join(__dirname, '../../app/models/schema'))
    .filter(function(file) {
        return (file.indexOf('.') !== 0);
    })
    .forEach(function(file) {
        let model = sequelize['import'](path.join(__dirname, '../../app/models/schema/'+file));
        //模型及关联关系同步到数据库
        sequelize.sync().then(() => {
            const filename =  file.split('.')[0];
            if (mock[filename]){
                model.create(mock[filename]);
            }
        });
    });

