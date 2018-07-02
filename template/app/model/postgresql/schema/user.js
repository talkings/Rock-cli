const base_field = require('../base/base_field');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', Object.assign({
        username: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //不可以重复
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        isInit: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, base_field(sequelize, DataTypes)), {
        tableName: 'user',
        comment: '账户表',
        // 不使用驼峰式命令规则，这样会在使用下划线分隔
        underscored: true,
    });
};
