module.exports = {
    'middleware' : ['gzip', 'res', 'bodyparser', 'koaLogger', 'koaCors'],
    'koaCors' : {
        'exposeHeaders' : ['WWW-Authenticate', 'Server-Authorization'],
        'maxAge' : 5,
        'credentials' : true,
        'allowMethods' : ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
        'allowHeaders' : ['Content-Type', 'Authorization', 'Accept']
    }
};