// const convert = require('koa-convert');
// const json = require('koa-json');
// const bodyparser = require('koa-bodyparser');
// const cors = require('koa2-cors');
// const logger = require('koa-logger');
// const router = require('../routes/');
// const gzip = require('./gzip.js');
// const oauth = require('./oauth.js');
// const res = require('./res.js');
// const favicon = require('koa-favicon');
// const path = require('path');

// module.exports =  ( app ) => {
    
// 	app.use(gzip);
//     app.use(res);  
// 	app.use(bodyparser());
//     app.use(convert(json()));
//     // app.use(favicon(path.join(__dirname, '../../favicon.ico')));
//     app.use(logger());
//     app.use(cors({
//         'exposeHeaders' : ['WWW-Authenticate', 'Server-Authorization'],
//         'maxAge' : 5,
//         'credentials' : true,
//         'allowMethods' : ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
//         'allowHeaders' : ['Content-Type', 'Authorization', 'Accept']
//     }));
//     app.use(oauth);
//     app.use(router(app));
    
   
//     return async ( ctx, next ) => {	
// 		await next();
// 	};
// };

module.exports = (  ) => {
    return () => {};
};
