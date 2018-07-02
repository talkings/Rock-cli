module.exports = ( app ) => {
	const User = {
		async addUserInfo(options) {
			return app.model.postgresql.user.create(options);
		}
	};
	return User;
};