'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

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
};

module.exports = {
  addHandlers
};
