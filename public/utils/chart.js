const chartData = {
    Dates:["05/08/2020", "05/09/2020", "05/10/2020"],
    Data: [1500, 1200, 1750]
};

let lineChart = $('#lineChart').html();
let lineChartScript = Handlebars.compile(lineChart);
let linehtml = lineChartScript(chartData);
$(document.body).append(linehtml);

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
   type: 'line',
   data: {
      labels:  chartData.Dates, 
      datasets: [
        {
          label: "Order Amount",
          fill: false,
          lineTension: 0,
          borderColor: "#0d6efd",
          data:  [chartData.Data] 
        }
      ]
   } 
});