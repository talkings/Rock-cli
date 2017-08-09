
module.exports =  function( app ){
	this.get('/search', app.controller.Users.resUserInfo);
};