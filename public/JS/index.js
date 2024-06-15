document.addEventListener('DOMContentLoaded', (event) => {
    const metaChartctx = document.getElementById('metaChart').getContext('2d');
    const metaChart = new Chart(metaChartctx, {
        type: 'line',
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'Ad Expenses in millions (USD)',
                    data: [100, 135, 281, 310, 324, 1110, 1570, 2260, 2990, 2650, 2020],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y-spending' // Assign to y-axis for spending
                },
                {
                    label: 'Ad Revenue in millions (USD)',
                    data: [6986, 11492, 17079, 26885, 39942, 55013, 69655, 84169, 114934, 113643, 131948],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y-earnings' // Assign to y-axis for earnings
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#000'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(90, 155, 255, 0.6)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    // borderColor: '#34495e',
                    borderWidth: 1
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#000'
                    },
                    ticks: {
                        color: '#000'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                'y-spending': {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ad Expenses in millions (USD)',
                        color: '#000'
                    },
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        color: '#000'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                'y-earnings': {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ad Revenue in millions (USD)',
                        color: '#000'
                    },
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        color: '#000'
                    },
                    grid: {
                        drawOnChartArea: false // Only draw grid lines for one axis
                    }
                }
            }
        }
    });

    const googleChartCtx = document.getElementById('googleChart').getContext('2d');
    const googleChart = new Chart(googleChartCtx, {
        type: 'bar',
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'Ad Expenses in millions (USD)',
                    data: [100, 135, 281, 310, 324, 1110, 1570, 2260, 2990, 2650, 2020],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y-spending' // Assign to y-axis for spending
                },
                {
                    label: 'Ad Revenue in billions (USD)',
                    data: [51.07, 59.62, 67.39, 79.38, 95.58, 116.46, 134.81, 146.92, 209.49, 224.47, 237.86],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y-earnings' // Assign to y-axis for earnings
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#000'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(90, 155, 255, 0.6)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    // borderColor: '#34495e',
                    borderWidth: 1
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#000'
                    },
                    ticks: {
                        color: '#000'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                'y-spending': {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ad Expenses in millions (USD)',
                        color: '#000'
                    },
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        color: '#000'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                'y-earnings': {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ad Revenue in billions (USD)',
                        color: '#000'
                    },
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        color: '#000'
                    },
                    grid: {
                        drawOnChartArea: false // Only draw grid lines for one axis
                    }
                }
            }
        }
    });

    window.metaChart = metaChart;
    window.googleChart = googleChart;

});

let currentChartIndex = 0;
const charts = ['metaChart', 'googleChart'];
const chartTitles = [
    'META Ad Spending vs Earnings (2013-2023)',
    'GOOGLE Ad Spending vs Earnings (2013-2023)'
];

function changeChart(direction) {
    const totalCharts = charts.length;
    currentChartIndex = (currentChartIndex + direction + totalCharts) % totalCharts;

    charts.forEach((chartId, index) => {
        document.getElementById(chartId).style.display = index === currentChartIndex ? 'block' : 'none';
    });

    document.getElementById('chartTitle').innerText = chartTitles[currentChartIndex];
}
