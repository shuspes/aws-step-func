'use strict';
const AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions();

module.exports.getUser = (event, context, callback) => {
    console.log('process.env', process.env.GET_USER_FLOW_ARN);
    
  try {
    var params = {
      stateMachineArn: process.env.GET_USER_FLOW_ARN,
      input: {}
    };

    stepfunctions.startExecution(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            data
          }),
        };
        callback(null, response);
      }
    });
  } catch (error) {
    callback(error);
  }
};