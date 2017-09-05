/**
 * 入口执行配置函数
 */

require('./core/main').startCluster({
    'port' : process.env.PORT || 3000
});
