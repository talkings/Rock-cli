module.exports = ( app ) => {
	const User = {
		/**
		 * 注册用户信息
		 */
		async register ( ctx ){
			const body = ctx.request.body;
			let parmas = {
				email : body.email,
				password : body.password
			};
			if (parmas.email.trim() === ''){
				throw '邮箱必填项';
			}
			if (parmas.password.trim() === ''){
				throw '密码必填项';
			}
			const data = await app.servers.users.addUserInfo( parmas );
			ctx.success(data);
		}
	};
	return User;
};