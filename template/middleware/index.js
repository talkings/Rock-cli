const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const cors = require('koa2-cors');
const logger = require('koa-logger');
const router = require('../routes/');
const res = require('./response.js');

export default ( app ) => {
    app.use(res);
	app.use(bodyparser);
    app.use(convert(json()));
    app.use(logger());
    app.use(cors({
        'exposeHeaders' : ['WWW-Authenticate', 'Server-Authorization'],
        'maxAge' : 5,
        'credentials' : true,
        'allowMethods' : ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
        'allowHeaders' : ['Content-Type', 'Authorization', 'Accept']
    }));
    app.use(router(app));
	
    return async ( ctx, next ) => {	
		await next();
	};
};
