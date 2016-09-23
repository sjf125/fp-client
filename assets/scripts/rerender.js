'use strict';

const chart = require('./piechart.js');
const app = require('./apiurl.js');
const events = require('./events.js');

const rerender = function () {
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

  getVehicles();
  chart.getChartData();
};


module.exports = {
  rerender
};
