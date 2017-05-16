import Koa from 'koa';
import logger from 'koa-logger';

const app = new Koa();
// middlewares
const middleware = require('./app/middleware/');
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


export default app;