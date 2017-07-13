// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set the region from the JSON file
AWS.config.loadFromPath('./config.json');

// Create an SQS service object
var sqs = new AWS.SQS();

var params = {
    DelaySeconds: 0,
    MessageBody: JSON.stringify({"plaintext": "SGVsbG8gV29ybGQ="}),
    QueueUrl: "https://sqs.us-west-2.amazonaws.com/328286347281/rabbitSQS"
};

sqs.sendMessage(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.MessageId);
    }
});