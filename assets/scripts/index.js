'use strict';

const app = require('./apiurl.js');
const events = require('./events.js');
const chart = require('./piechart.js');
// const api = require('./ajax.js');
const moment = require('moment');
const Handlebars = require('handlebars/runtime')['default'];


Handlebars.registerHelper('formatTime', function (date, format) {
    const mmnt = moment(date);
    return mmnt.format(format);
});


const displayVehicles = function(vehicles){
  const display = require('./vehicles.handlebars');
  $('.content').empty().append(display({ vehicles }));
  events.addHandlers();
};

const getVehicles = function() {
  $.ajax({
    method: 'GET',
    url: app.api + '/vehicles/',
  }).done(function(data){
      displayVehicles(data.vehicles);
    });
};

$(() => {
  getVehicles();
  chart.getChartData();
});


module.exports = {
  getVehicles,
  displayVehicles
};
