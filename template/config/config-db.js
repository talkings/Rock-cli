/**
 * postgresql Configure
 */
exports.postgresql = {
		//数据库
		'database': 'test',
		//用户名
		'username': process.env.POSTGRESQL_USERNAME,
		//口令
		'password': process.env.POSTGRESQL_SECRET,
		//主机
		'host': process.env.POSTGRESQL_HOST,
		//端口
		'port': '5431'
};