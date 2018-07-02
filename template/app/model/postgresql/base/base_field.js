/**
 * 公共基础字段
 * @param { object } sequelize 
 * @param { object } DataTypes 
 */
const { Snowflake } = require("node-snowflake");
module.exports = function ( sequelize, DataTypes ){
    return {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            defaultValue: function(){
                Number.prototype.random = function () {
                    return Math.floor(this * Math.random());
                }; 
                return Snowflake.nextId(1, 1, (1000).random())
            },
            comment: '唯一标识'
        },
        json_str: {
            type: DataTypes.JSON,
            defaultValue: {},
            allowNull: true
        }
    };
};