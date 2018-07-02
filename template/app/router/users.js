
module.exports =  function( app ){
	//user register 注册用户接口
	this.post('/register', app.controller.users.register);
};