const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');

// middlewares
const middleware = require('./middleware/');
app.use(middleware(app));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response

app.on('error', function(err, ctx){
  console.log(err);
  logger.error('server error', err, ctx);
});


module.exports = app;