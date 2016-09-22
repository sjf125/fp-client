'use strict';

// const api = require('./ajax.js');
const app = require('./apiurl.js');
const events = require('./events.js');



const displayVehicles = function(vehicles){
  const display = require('./vehicles.handlebars');
  $('.content').append(display({ vehicles }));
  events.addHandlers();
};

const getVehicles = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/vehicles/',
  }).done(function(data){
      displayVehicles(data.vehicles);
    })
    .fail(failure);
};

$(() => {
  getVehicles();
});
