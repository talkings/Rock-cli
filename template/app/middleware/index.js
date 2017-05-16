import convert from 'koa-convert';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';
import cors from 'koa2-cors';
import logger from 'koa-logger';
import router from '../routes/';
import proxy from './proxy.js';
import gzip from './gzip.js';
import oauth from './oauth.js';
import favicon from 'koa-favicon';
import path from 'path';

export default ( app ) => {
    
  	app.use(gzip);
    app.use(proxy);
	app.use(bodyparser());
    app.use(convert(json()));
    app.use(favicon(path.join(__dirname, '../../favicon.ico')));
    app.use(logger());
    app.use(cors({
        'exposeHeaders' : ['WWW-Authenticate', 'Server-Authorization'],
        'maxAge' : 5,
        'credentials' : true,
        'allowMethods' : ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
        'allowHeaders' : ['Content-Type', 'Authorization', 'Accept']
    }));
    app.use(oauth);
    app.use(router(app));
    
   
    return async ( ctx, next ) => {	
		await next();
	};
};
