'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const api = require('./ajax.js');
const ui = require('./ui.js');


const addHandlers = () => {
  $('.remove-vehicle').on('click', function() {
    let id = $(this).data('id');
    console.log(id);
    console.log('click');
    // api.removeVehicle(ui.success, ui.failure, id);
    // $(this).parent().parent().fadeOut(500, function(){
    //   $('.total-row').addClass('hidden');
    // });
  });
};

module.exports = {
  addHandlers
};
