module.exports = {
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
    disableClustering: true,
    appenders: {
        logfaces: {
            type: 'logFaces-UDP',
            remoteHost: '127.0.0.1',
            port: 2555
        }
    },
    categories: {
        default: {
            appenders: ['logfaces'], level: 'info'
        },
        system_trace: {
            appenders: ['logfaces'], level: 'trace'
        },
        business_trace: {
            appenders: ['logfaces'], level: 'trace'
        },
        system_info: {
            appenders: ['logfaces'], level: 'info'
        },
        business_info: {
            appenders: ['logfaces'], level: 'info'
        },
        system_warn: {
            appenders: ['logfaces'], level: 'warn'
        },
        business_warn: {
            appenders: ['logfaces'], level: 'warn'
        },
        system_error: {
            appenders: ['logfaces'], level: 'error'
        },
        business_error: {
            appenders: ['logfaces'], level: 'error'
        },
        system_fatal: {
            appenders: ['logfaces'], level: 'fatal'
        },
        business_fatal: {
            appenders: ['logfaces'], level: 'fatal'
        }
    }
};