document.addEventListener("DOMContentLoaded", function () {
    // PIE CHART - Interest in Politics
    const interestCtx = document.getElementById('interestChart').getContext('2d');
    new Chart(interestCtx, {
        type: 'pie',
        data: {
            labels: ['Very Interested', 'Somewhat Interested', 'Neutral', 'Not Interested'],
            datasets: [{
                label: 'Interest Level',
                data: [60, 80, 70, 40], // Total respondents: 250
                backgroundColor: [
                    '#0c1e2c', '#142734', '#1d3847', '#24536a'
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
                    text: 'Total Respondents - 250',
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

    // BAR CHART - Follow National News
    const newsCtx = document.getElementById('newsChart').getContext('2d');
    new Chart(newsCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No', 'Occasionally'],
            datasets: [{
                label: 'Responses',
                data: [100, 80, 70], // Total respondents: 250
                backgroundColor: ['#84b6d2', '#407ca0', '#24536a']
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

    // PIE CHART - Indian Political Party Support
    const partyCtx = document.getElementById('partyChart').getContext('2d');
    new Chart(partyCtx, {
        type: 'pie',
        data: {
            labels: ['BJP', 'Congress', 'AAP', 'Other', 'None'],
            datasets: [{
                label: 'Party Support',
                data: [90, 60, 40, 30, 30], // Total respondents: 250
                backgroundColor: [
                    '#FF9933', '#1E90FF', '#00CED1', '#8A2BE2', '#808080'
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
                    text: 'Total Respondents - 250',
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

    // BAR CHART - Opinion on Current Indian Government
    const opinionCtx = document.getElementById('opinionChart').getContext('2d');
    new Chart(opinionCtx, {
        type: 'bar',
        data: {
            labels: ['Support', 'Neutral', 'Oppose'],
            datasets: [{
                label: 'Responses',
                data: [80, 100, 70], // Total respondents: 250
                backgroundColor: ['#3C91E6', '#FDE74C', '#E55934']
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

    // BAR CHART - Importance of Voting
    const votingCtx = document.getElementById('votingChart').getContext('2d');
    new Chart(votingCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No', 'Maybe'],
            datasets: [{
                label: 'Responses',
                data: [150, 50, 50], // Total respondents: 250
                backgroundColor: ['#9BC53D', '#C3423F', '#404E7C']
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