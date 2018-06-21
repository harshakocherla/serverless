'use strict';

const userCreate = require('./user-crud/user-create.js');
const usersReadAll = require('./user-crud/users-read-all');
const usersReadOne = require('./user-crud/users-read-one.js');
const userUpdate = require('./user-crud/user-update.js');
const userDelete = require('./user-crud/user-delete.js');

module.exports.create = (event, context, callback) => {
  userCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ result, event }),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  console.log(event);

  usersReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  usersReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  userUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  userDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
