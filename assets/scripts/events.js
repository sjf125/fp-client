'use strict';

const api = require('./ajax.js');
const ui = require('./ui.js');


const addHandlers = () => {
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
  $('#add-vehicle').on('click', function(event) {
    let data = {
      vehicle: {
        state: $('#state-id').val(),
        plate: $('#plate-num').val(),
        type: $('#parking-type').val()
      }
    };
    event.preventDefault();
    console.log(data);
    api.addVehicle(ui.success, ui.failure, data);
  });
};

module.exports = {
  addHandlers
};
