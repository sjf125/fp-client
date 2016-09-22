'use strict';

const app = require('./apiurl.js');
const events = require('./events.js');
const ui = require('./ui.js');


const displayVehicles = function(vehicles){
  const display = require('./vehicles.handlebars');
  $('.content').empty().append(display({ vehicles }));
  events.addHandlers();
};

const getVehicles = function(failure) {
  $.ajax({
    method: 'GET',
    url: app.api + '/vehicles/',
  }).done(function(data){
      displayVehicles(data.vehicles);
    })
    .fail(failure);
};

$(() => {
  getVehicles(ui.failure());
});


module.exports = {
  getVehicles,
  displayVehicles
};
