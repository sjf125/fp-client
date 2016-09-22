'use strict';

const app = require('./apiurl.js');
const index = require('./index.js');


const addVehicle = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/vehicles/',
    dataType: 'json',
    dataProcessing: false,
    data
  }).done(success)
    .fail(failure);
};

const removeVehicle = (success, failure, id) => {
  $.ajax({
    method: "DELETE",
    url: app.api + '/vehicles/' + id,
    dataType: 'json'
  })
  .done(success)
  .fail(failure);
};

module.exports = {
  addVehicle,
  removeVehicle
};
