'use strict';

const app = require('./apiurl.js');


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log(app.user._id);
};


module.exports = {
  failure,
  success
};
