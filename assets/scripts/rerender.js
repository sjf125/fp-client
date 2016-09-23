'use strict';

const chart = require('./piechart.js');
const app = require('./apiurl.js');
// const events = require('./events.js');
const api = require('./ajax.js');
const ui = require('./ui.js');

const rerender = function () {
  const displayVehicles = function(vehicles){
    const display = require('./vehicles.handlebars');
    $('.content').empty().append(display({ vehicles }));
    // Getting TypeError, events.addHandlers is not a function
    // events.addHandlers();
    $('.remove-vehicle').on('click', function() {
      $(this).addClass('hidden');
      $(this).siblings().removeClass('hidden');
      $('.cancel-remove').on('click', function() {
        $(this).parent().siblings().removeClass('hidden');
        $(this).parent().addClass('hidden');
      });
      $('.confirm-remove').on('click', function () {
        let id = $(this).data('id');
        api.removeVehicle(ui.success, ui.failure, id);
        $(this).parent().parent().parent().fadeOut(500, function(){
          $('.total-row').addClass('hidden');
        });
      });
    });
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
