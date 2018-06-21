'use strict';

const chitCreate = require('./chit-crud/chit-create.js');
const chitsReadAll = require('./chit-crud/chits-read-all');
const chitsReadOne = require('./chit-crud/chits-read-one.js');
const chitUpdate = require('./chit-crud/chit-update.js');
const chitDelete = require('./chit-crud/chit-delete.js');

module.exports.create = (event, context, callback) => {
  chitCreate(event, (error, result) => {
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

module.exports.readAll = (event, context, callback) => {
  chitsReadAll(event, (error, result) => {
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
  chitsReadOne(event, (error, result) => {
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
  chitUpdate(event, (error, result) => {
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
  chitDelete(event, (error, result) => {
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
