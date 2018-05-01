import Chart from 'chart.js';

export class LineChart {

  constructor() {
  }

  attached() {
    this.createChart();
  }

  createChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'apples',
          data: [12, 19, 3, 17, 6, 3, 7],
          backgroundColor: "rgba(153,255,51,0.6)"
        }, {
          label: 'oranges',
          data: [2, 29, 5, 5, 2, 3, 10],
          backgroundColor: "rgba(255,153,0,0.6)"
        }]
      }
    });
  }    
}
