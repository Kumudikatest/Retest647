module.exports = function() {
    this.clusters = [];

    this.clusters["l"] = {
        host: process.env.EndPoint_redisL,
        port: 6379,
        clusterModeEnabled: true
    };
    this.clusters["kcluster"] = {
        host: process.env.EndPoint_redisKcluster,
        port: 6379,
        clusterModeEnabled: false
    };
};