document.addEventListener("DOMContentLoaded", function () {
    // PIE CHART - Favorite Hobby
    const hobbyCtx = document.getElementById('hobbyChart').getContext('2d');
    new Chart(hobbyCtx, {
        type: 'pie',
        data: {
            labels: ['Reading', 'Gaming', 'Sports', 'Music', 'Other'],
            datasets: [{
                label: 'Hobby Preference',
                data: [80, 100, 60, 40, 20], // Total respondents: 300
                backgroundColor: [
                    '#0c1e2c', '#142734', '#1d3847', '#24536a', '#2c6883'
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
                    text: 'Total Respondents - 300',
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
                    borderColor: '#ffffff',
                    borderWidth: 1,
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

    // BAR CHART - Exercise Frequency
    const exerciseCtx = document.getElementById('exerciseChart').getContext('2d');
    new Chart(exerciseCtx, {
        type: 'bar',
        data: {
            labels: ['Daily', 'Weekly', 'Rarely', 'Never'],
            datasets: [{
                label: 'Responses',
                data: [50, 100, 90, 60], // Total respondents: 300
                backgroundColor: ['#84b6d2', '#407ca0', '#24536a', '#1d3847']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 300',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black',
                    bodyColor: 'black',
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw;
                            const label = tooltipItem.label || '';
                            return `${label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' },
                    grid: {
                        color: '#666666'
                    }
                },
                y: {
                    ticks: { color: 'white' },
                    beginAtZero: true,
                    grid: {
                        color: '#666666'
                    }
                }
            }
        }
    });

    // BAR CHART - Living Preference
    const livingCtx = document.getElementById('livingChart').getContext('2d');
    new Chart(livingCtx, {
        type: 'bar',
        data: {
            labels: ['On-Campus', 'Off-Campus', 'Undecided'],
            datasets: [{
                label: 'Responses',
                data: [120, 140, 40], // Total respondents: 300
                backgroundColor: ['#3C91E6', '#E55934', '#FDE74C']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 300',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black',
                    bodyColor: 'black',
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw;
                            const label = tooltipItem.label || '';
                            return `${label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' },
                    grid: {
                        color: '#666666'
                    }
                },
                y: {
                    ticks: { color: 'white' },
                    beginAtZero: true,
                    grid: {
                        color: '#666666'
                    }
                }
            }
        }
    });

    // BAR CHART - Music Preference
    const musicCtx = document.getElementById('musicChart').getContext('2d');
    new Chart(musicCtx, {
        type: 'bar',
        data: {
            labels: ['Pop', 'Rock', 'Classical', 'Hip-Hop', 'Other'],
            datasets: [{
                label: 'Responses',
                data: [80, 70, 50, 60, 40], // Total respondents: 300
                backgroundColor: '#5BC0BE'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 300',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black',
                    bodyColor: 'black',
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw;
                            const label = tooltipItem.label || '';
                            return `${label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' },
                    grid: {
                        color: '#666666'
                    }
                },
                y: {
                    ticks: { color: 'white' },
                    beginAtZero: true,
                    grid: {
                        color: '#666666'
                    }
                }
            }
        }
    });

    // BAR CHART - Free Time
    const freeTimeCtx = document.getElementById('freeTimeChart').getContext('2d');
    new Chart(freeTimeCtx, {
        type: 'bar',
        data: {
            labels: ['Socializing', 'Watching Movies', 'Studying', 'Gaming'],
            datasets: [{
                label: 'Responses',
                data: [90, 80, 70, 60], // Total respondents: 300
                backgroundColor: ['#9BC53D', '#C3423F', '#404E7C', '#24536a']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 300',
                    font: { size: 20, weight: 'bold' },
                    padding: { top: 10, bottom: 30 },
                    color: 'white'
                },
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'white',
                    titleColor: 'black',
                    bodyColor: 'black',
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw;
                            const label = tooltipItem.label || '';
                            return `${label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' },
                    grid: {
                        color: '#666666'
                    }
                },
                y: {
                    ticks: { color: 'white' },
                    beginAtZero: true,
                    grid: {
                        color: '#666666'
                    }
                }
            }
        }
    });
});