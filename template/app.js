// const Koa = require('koa');
// const logger = require('koa-logger');

// const app = new Koa();
// // middlewares
// const middleware = require('./app/middleware/');
// app.use(middleware(app));

// // logger
// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// // response
// app.on('error', function(err, ctx){
//   console.log(err);
//   logger.error('server error', err, ctx);
// });

// console.log(require('./rocks/entry'));

require('./rocks/main').startCluster({
    'baseDir' : __dirname,
    'port' : process.env.PORT || 3000
});

// const http = require('http');
// http.createServer(app.callback()).listen(3000);

