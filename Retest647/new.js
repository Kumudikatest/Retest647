let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (event, context, callback) {
    // You must always quit the redis client after it's used
    redis.rename({
        clusterIdentifier: 'kcluster',
        params: [{
            key: 'ID',
            name: 'id'
        }]
    }, function (error, response, redisClient) {
        if (error) {
            callback(error);
            console.log(error);
        } else {
            console.log(response);
            redisClient.quit();
        }
    });

    callback(null, { "message": "Successfully executed" });
}