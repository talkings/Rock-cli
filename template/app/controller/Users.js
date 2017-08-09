module.exports = ( app ) => {
	const User = {
		async resUserInfo( ctx ){
			const data = await app.servers.Users.getUserInfo();
			ctx.success({
				'list' : data
			});
		}
	};
	return User;
};