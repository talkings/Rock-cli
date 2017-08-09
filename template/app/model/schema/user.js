module.exports = (sequelize, DataTypes) => {
	/**
	 * 用户表
	 */
    const user = sequelize.define('user', {
        'id': {
			// 定义主键 
			'primaryKey' : true,
			//类型
			'type' : DataTypes.STRING,
			'defaultValue' : DataTypes.UUID4,
			'unique' : true,
			'comment' : '唯一标识',
		},
		'username' : {
			//类型
			'type': DataTypes.STRING,
			'comment' : '企业名称',
		}
	}, {
		'comment' : '用户列表',
		'charset' : 'utf8',
		'collate' : 'utf8_general_ci',
		'tableName' : 'user',
		'underscored' : true,
		//递增初始值
		'initialAutoIncrement' : 10000,
		//冻结表名称
		'freezeTableName' : true,
		//'timestamps' : false,
		'classMethods' : {
			
		}
	});

	return user;
};