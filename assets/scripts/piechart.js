'use strict';

const app = require('./apiurl.js');
const Chart = require('chart.js');

const ctx = $("#pieChart");


let pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        "Vacant",
        "Term",
        "Valet",
        "Regular"
      ],
      datasets: [
        {
          data: [200,0,0,0],
          backgroundColor: [
            "#000000",
            "#FFCE56",
            "#FF6384",
            "#36A2EB"
          ]
        }]
    },
    options: {
      legend: {
        position: 'bottom'
      }
    }
});

function rerenderChart(arr){
  let term = 0;
  let valet = 0;
  let regular = 0;
    for (let i=0; i < arr.length; i++) {
        if (arr[i]._id === 'Term') {
          term = arr[i].total;
        }
        else if (arr[i]._id === 'Valet') {
          valet = arr[i].total;
        }
        else if (arr[i]._id === 'Regular') {
          regular = arr[i].total;
        }
    }
    let vacant = 200-term-valet-regular;
    let typeTotals = [vacant, term, valet, regular];
    pieChart.data.datasets[0].data = typeTotals;
    pieChart.update();
}

const getChartData = function() {
  $.ajax({
    method: 'GET',
    url: app.api + '/vehicles-count/',
  }).done(function(data){
      rerenderChart(data.vehicles);
    });
};

module.exports = {
  pieChart,
  getChartData
};
