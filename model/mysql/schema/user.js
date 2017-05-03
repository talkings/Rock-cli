module.exports = (sequelize, DataTypes) => {
	/**
	 * 用户表
	 */
	var user = sequelize.define("user", {
		id: {
			// 定义主键 
			primaryKey: true,
			//自动递增
			autoIncrement: true,
			//类型
			type: DataTypes.INTEGER,
			unique : true,
			comment : "用户唯一标识",
			//inspect
			validate : {
				isNumeric : true,
				isInt : true,
				notNull : true,
				min : 10000
			}
		},
		username: {
			//类型
			type: DataTypes.STRING,
			//是否允许为空
			allowNull: false,
			comment : "用户名",
			validate : {
				notEmpty: true
			}
		},
		password: {
			//类型
			type: DataTypes.STRING,
			//是否允许为空
			allowNull: false,
			comment : "口令",
			validate : {
				notEmpty: true,
				isAlphanumeric: true
			}
		},
		createdate: {
			type: DataTypes.DATE,
			//是否允许为空
			allowNull: false,
			defaultValue: DataTypes.NOW,
			comment : "创建时间"
		},
		authkey: {
			//类型
			type: DataTypes.STRING,
			//主键
			primaryKey: true,
			//是否允许为空
			allowNull: false,
			//通用唯一标识
			defaultValue: DataTypes.UUIDV4,
			comment : "key" 
			
//			validate: {
//				is: ["^[a-z]+$", 'i'], // 只允许字母
//				is: /^[a-z]+$/i, // 只允许字母
//				not: ["[a-z]", 'i'], // 不能使用字母
//				isEmail: true, // 检测邮箱格式 (foo@bar.com)
//				isUrl: true, // 检查Url格式 (http://foo.com)
//				isIP: true, // 检查 IPv4 或 IPv6 格式
//				isIPv4: true, // 检查 IPv4
//				isIPv6: true, // 检查 IPv6
//				isAlpha: true, // 不能使用字母
//				isAlphanumeric: true, // 只允许字母数字字符
//				isNumeric: true, // 只能使用数字
//				isInt: true, // 只能是整数
//				isFloat: true, // 只能是浮点数
//				isDecimal: true, // 检查数字
//				isLowercase: true, // 检查小写字母
//				isUppercase: true, // 检查大写字母
//				notNull: true, // 不允许null
//				isNull: true, // 只能为null
//				notEmpty: true, // 不能空字符串
//				equals: 'specific value', // 只能使用指定值
//				contains: 'foo', // 必须包含子字符串
//				notIn: [
//					['foo', 'bar']
//				], // 不能是数组中的任意一个值
//				isIn: [
//					['foo', 'bar']
//				], // 只能是数组中的任意一个值
//				notContains: 'bar', // 不能包含子字符串
//				len: [2, 10], // 值的长度必在 2 和 10 之间
//				isUUID: 4, // 只能是UUID
//				isDate: true, // 只能是日期字符串
//				isAfter: "2011-11-05", // 只能使用指定日期之后的时间
//				isBefore: "2011-11-05", // 只能使用指定日期之前的时间
//				max: 23, // 允许的最大值
//				min: 23, // 允许的最小值
//				isArray: true, // 不能使用数组
//				isCreditCard: true, // 检查是有效的信用卡
//
//				// 也可以自定义验证:
//				isEven: function(value) {
//					if(parseInt(value) % 2 != 0) {
//						throw new Error('Only even values are allowed!')
//							// we also are in the model's context here, so this.otherField
//							// would get the value of otherField if it existed
//					}
//				}
//			}
		}
	}, {
		comment: '用户列表',
	    charset: 'utf8',
	    collate: 'utf8_general_ci',
		tableName: 'user',
		underscored: true,
		//递增初始值
		initialAutoIncrement : 10000,
		//冻结表名称
		freezeTableName: true,
		timestamps: false,
		classMethods: {
			//    associate: function(models) {
			//      user.hasMany(models.Task)
			//    }
		}
	});

	return user;
};