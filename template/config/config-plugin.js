module.exports = {
    //'middleware': ['koaAwaitBreakpoint','koaCors', 'gzip', 'res', 'koaConditionalGet', 'koaEtag', 'koaBody', 'xss', 'koaLogger'],
    'middleware': ['koaCors', 'gzip', 'res', 'koaBody', 'xss', 'koaLogger'],
    'koaCors' : {
        'exposeHeaders': ['WWW-Authenticate', 'Server-Authorization', 'Content-Length', 'Accept-Encoding'],
        'maxAge' : 5,
        'credentials' : true,
        'allowMethods' : ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
        'allowHeaders': ['Content-Type', 'Authorization', 'Accept', 'x-access-token', 'X-URL-PATH']
    }
};