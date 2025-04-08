document.addEventListener("DOMContentLoaded", function () {
    // PIE CHART - Degree Distribution
    const degreeCtx = document.getElementById('degreeChart').getContext('2d');
    new Chart(degreeCtx, {
        type: 'pie',
        data: {
            labels: ['BTech', 'M.Tech', 'Dual Degree', 'M.Sc', 'B.S.', 'IDDDP', 'PhD', 'MBA', 'M.Des', 'M.S.', 'B.Des'],
            datasets: [{
                label: 'Degree Distribution',
                data: [162, 46, 38, 20, 7, 6, 4, 3, 2, 2, 1],
                backgroundColor: [
                    '#0c1e2c', '#142734', '#1d3847', '#24536a', '#2c6883',
                    '#407ca0', '#5894b6', '#84b6d2', '#a6d2e7', '#c3e6f1', '#dff1f8'
                ],
                borderColor: 'white',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 291',
                    font: { size: 20, weight: 'bold' },
                    color: 'white',
                    padding: { top: 10, bottom: 30 }
                },
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black', 
                    bodyColor: 'black',
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw;
                            const label = tooltipItem.label;
                            return `${label}: ${value}`;
                        }
                    }
                }
            }
        }
    });

    // BAR CHART - Minors or Honors
    const minorsCtx = document.getElementById('minorsChart').getContext('2d');
    new Chart(minorsCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No'],
            datasets: [{
                label: 'Responses',
                data: [100, 150],
                backgroundColor: ['#84b6d2', '#407ca0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 250',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black', 
                    bodyColor: 'black',
                },
                legend: { display: false }
            },
            scales: {
                x: { 
                    ticks: { color: 'white' },
                    grid: {
                        color:'#666666'
                        } 
                    },
                y: { 
                    ticks: { color: 'white' },
                    beginAtZero: true,
                    grid: {
                        color:'#666666'
                        } 
                    }
            }
        }
    });

    // BAR CHART - CPI
    const cpiCtx = document.getElementById('cpiChart').getContext('2d');
    new Chart(cpiCtx, {
        type: 'bar',
        data: {
            labels: ['<6', '6-7', '7-8', '8-9', '>9'],
            datasets: [{
                label: 'Students',
                data: [10, 40, 80, 100, 61],
                backgroundColor: '#5BC0BE'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 291',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black', 
                    bodyColor: 'black',
                },
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: 'white' },
                    grid: {
                        color:'#666666'
                        } 
                    },
                y: { 
                    ticks: { color: 'white' }, 
                    beginAtZero: true,
                    grid: {
                        color:'#666666'
                        } 
                    }

            }
        }
    });

    // BAR CHART - Core Interest
    const coreCtx = document.getElementById('coreChart').getContext('2d');
    new Chart(coreCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No', 'Maybe'],
            datasets: [{
                label: 'Responses',
                data: [120, 100, 71],
                backgroundColor: ['#3C91E6', '#E55934', '#FDE74C']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 291',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black', 
                    bodyColor: 'black',
                },
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: 'white' },
                    grid: {
                        color:'#666666'
                        } 
                    },
                y: { 
                    ticks: { color: 'white' }, 
                    beginAtZero: true,
                    grid: {
                        color:'#666666'
                        } 
                    }
            }
        }
    });

    // BAR CHART - Higher Studies
    const higherStudiesCtx = document.getElementById('higherStudiesChart').getContext('2d');
    new Chart(higherStudiesCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No', 'Undecided'],
            datasets: [{
                label: 'Responses',
                data: [90, 110, 91],
                backgroundColor: ['#9BC53D', '#C3423F', '#404E7C']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 291',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black', 
                    bodyColor: 'black',
                },
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: 'white' },
                    grid: {
                        color:'#666666'
                        } 
                    },
                y: { ticks: { color: 'white' }, beginAtZero: true ,
                    grid: {
                        color:'#666666'
                        } 
                    }
            }
        }
    });

    // PIE CHART - Platform Usage
    const platformCtx = document.getElementById('platformChart').getContext('2d');
    new Chart(platformCtx, {
        type: 'pie',
        data: {
            labels: [
                'Platforms like Coursera, YouTube, Udemy, etc.',
                'No, I didn’t',
                'NPTEL or CDEEP',
                'Books from the library',
                'Other (Friends, ChatGPT, Google)'
            ],
            datasets: [{
                label: 'Platform Usage',
                data: [130, 90, 35, 20, 13], // Approximate values summing to 288
                backgroundColor: [
                    '#0c1e2c', // Darkest blue
                    '#142734',
                    '#1d3847',
                    '#24536a',
                    '#2c6883'  // Lightest blue
                ],
                borderColor: 'white',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 288',
                    font: { size: 20, weight: 'bold' },
                    color: 'white',
                    padding: { top: 10, bottom: 30 }
                },
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black', 
                    bodyColor: 'black',
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw;
                            const label = tooltipItem.label;
                            return `${label}: ${value}`;
                        }
                    }
                }
            }
        }
    });
});