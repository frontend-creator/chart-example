import Chart from 'chart.js';

export class PieChart {

  constructor() {
  }

  attached() {
    this.createChart();
  }

  createChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      }
    });
  }    
}
