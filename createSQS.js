// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set the region from the JSON file
AWS.config.loadFromPath('./config.json');

// Create an SQS service object
var sqs = new AWS.SQS();

// List all SQS url
// var params = {};

// sqs.listQueues(params, function(err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data.QueueUrls);
//     }
// });

// Create SQS
var params = {
    QueueName: 'rabbitSQS',
    Attributes: {
    'DelaySeconds': '0',
    'ReceiveMessageWaitTimeSeconds':'20'
    }
};

sqs.createQueue(params, function(err, data) {
    if (err) {
    console.log("Error", err);
    } else {
    console.log("Success", data.QueueUrl);
    }
});


// get SQS url
var params = {
    QueueName: 'rabbitSQS'
};

sqs.getQueueUrl(params, function(err, data) {
    if (err) {
    console.log("Error", err);
    } else {
    console.log("Success", data.QueueUrl);
    }
});
