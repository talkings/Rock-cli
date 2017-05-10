module.exports = (sequelize, DataTypes) => {
	/**
	 * 用户表
	 */
    const product = sequelize.define('user', {
        'id': {
			// 定义主键 
			'primaryKey' : true,
			//自动递增
			'autoIncrement' : true,
			//类型
			'type' : DataTypes.INTEGER,
			'unique' : true,
			'comment' : '用户唯一标识',
			//inspect
			'validate' : {
				'isNumeric' : true,
				'isInt' : true,
				'notNull' : true,
				'min' : 10000
			}
		},
		'username' : {
			//类型
			'type': DataTypes.STRING,
			//是否允许为空
			'allowNull' : false,
			'comment' : '用户名',
			'validate' : {
				'notEmpty' : true
			}
		},
		'password' : {
			//类型
			'type' : DataTypes.STRING,
			//是否允许为空
			'allowNull' : false,
			'comment' : '口令',
			'validate' : {
				'notEmpty' : true,
				'isAlphanumeric' : true
			}
		},
		'createdate' : {
			'type' : DataTypes.DATE,
			//是否允许为空
			'allowNull' : false,
			'defaultValue' : DataTypes.NOW,
			'comment' : '创建时间'
		},
		'authkey' : {
			//类型
			'type' : DataTypes.STRING,
			//主键
			'primaryKey' : true,
			//是否允许为空
			'allowNull' : false,
			//通用唯一标识
			'defaultValue' : DataTypes.UUIDV1,
			'comment' : 'key',
			'validate' : {}
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
		'timestamps' : false,
		'classMethods' : {
			//    associate: function(models) {
			//      user.hasMany(models.Task)
			//    }
		}
	});

	return product;
};