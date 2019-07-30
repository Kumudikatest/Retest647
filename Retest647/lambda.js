let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (event, context, callback) {
    // You must always quit the redis client after it's used
    redis.expire({
        clusterIdentifier: 'kcluster',
        params: [{
            key: 'ID',
            seconds: 60
        }, {
            key: 'Name',
            seconds: 120
        }]
    }, function (error, response, redisClient) {
        if (error) {
            console.log(error);
            callback(error);       
        } else {
            console.log(response);
            redisClient.quit();
        }
    });

    callback(null, { "message": "Successfully executed" });
}