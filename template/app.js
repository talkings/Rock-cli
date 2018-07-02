/**
 * 入口执行配置函数
 */
require('./core/main').startCluster({
    'port': 3002,
    'version' : 'v1',
    'protocol' : 'http',
    'logger' : false
});
