module.exports = function() {
    this.clusters = [];

    this.clusters["kcluster"] = {
        host: process.env.EndPoint_redisKcluster,
        port: 6379,
        clusterModeEnabled: false
    };
};