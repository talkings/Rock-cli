const Https = require('https');
const Http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const Fs = require('fs');
const Path = require('path');
const Raven = require('raven');
// const heapdump = require('heapdump');
// let storagePath = Path.join(process.cwd(), `./heapsnapshot/${Date.now()}.heapsnapshot`);
// heapdump.writeSnapshot(storagePath);
/**
 * 上下文管理 执行初始化
 */

module.exports = async function (){
    const app = new Koa();
    const isDev = (process.env.NODE_ENV === 'DEV');
    await this.renderMiddleware( app );
    await this.renderRouter(app, Router );
    Raven.config('https://5e4759e5e27942fab4382359752a9999@.io/1188548').install();
    app.on('error', function(err){
        global.log4js.system_fatal.fatal(err);
        Raven.captureException(err, function (err, eventId) {
            console.log('Reported error ' + eventId);
        });
        console.log(`The service start error msg:${ err }`);
    });
    if (this.options.protocol && this.options.protocol === "https"){
        var options = {
            key: Fs.readFileSync('./ssl/privatekey.pem'),
            cert: Fs.readFileSync('./ssl/certificate.pem')
        };
        Https.createServer(options, app.callback()).listen(this.options.port);
    } else {
        Http.createServer(app.callback()).listen(this.options.port);
    }
    
    
    console.log('\x1B[36m%s\x1B[0m', `The service start successfully port ${ this.options.port }`);
};