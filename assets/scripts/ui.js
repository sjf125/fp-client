'use strict';

const index = require('./index.js');


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const addVehicleSuccess = (data) => {
  console.log(data);
  index.getVehicles();
};


module.exports = {
  failure,
  success,
  addVehicleSuccess
};
