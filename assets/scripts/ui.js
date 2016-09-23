'use strict';

const index = require('./index.js');
const chart = require('./piechart.js');
const rerender = require('./rerender.js');


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};


const addVehicleSuccess = (data) => {
  console.log(data);
  rerender.rerender();
};


module.exports = {
  failure,
  success,
  addVehicleSuccess
};
