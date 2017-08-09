module.exports = ( app ) => {
	const User = {
		/**
		 * 查询用户信息
		 */
		getUserInfo () {
			const data = app.model.user.findAll();
			return data;
		}
	};
	return User;
};