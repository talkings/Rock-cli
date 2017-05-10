const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const cors = require('koa2-cors');
const router = require('./routes/');
const res = require('./middleware/response.js');


// middlewares
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