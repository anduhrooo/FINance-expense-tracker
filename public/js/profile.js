import Chart from 'chart.js';

// Import Chart.js library

// Get the canvas element
const canvas = document.getElementById('myChart');

// Create the doughnut chart
new Chart(canvas, {
    type: 'doughnut',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['red', 'blue', 'green']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});