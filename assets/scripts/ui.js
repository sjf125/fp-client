'use strict';

const app = require('./apiurl.js');


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};


module.exports = {
  failure,
  success
};
