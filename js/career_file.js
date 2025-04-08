document.addEventListener("DOMContentLoaded", function () {
    // PIE CHART - Job Type
    const jobTypeCtx = document.getElementById('jobTypeChart').getContext('2d');
    new Chart(jobTypeCtx, {
        type: 'pie',
        data: {
            labels: ['Software Development', 'Data Science', 'Finance', 'Consulting', 'Other'],
            datasets: [{
                label: 'Job Type Preference',
                data: [150, 80, 40, 30, 20], 
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
                    text: 'Total Respondents - 320',
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
                    // borderColor: '#ffffff',
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

    // BAR CHART - Interview Preparation
    const interviewPrepCtx = document.getElementById('interviewPrepChart').getContext('2d');
    new Chart(interviewPrepCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No', 'In Progress'],
            datasets: [{
                label: 'Responses',
                data: [120, 100, 100], 
                backgroundColor: ['#84b6d2', '#407ca0', '#24536a']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 320',
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

    // BAR CHART - Company Type
    const companyTypeCtx = document.getElementById('companyTypeChart').getContext('2d');
    new Chart(companyTypeCtx, {
        type: 'bar',
        data: {
            labels: ['Startup', 'Large Company', 'Undecided'],
            datasets: [{
                label: 'Responses',
                data: [90, 150, 80], // Total respondents: 320
                backgroundColor: ['#3C91E6', '#E55934', '#FDE74C']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 320',
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

    // BAR CHART - Preferred Location
    const locationCtx = document.getElementById('locationChart').getContext('2d');
    new Chart(locationCtx, {
        type: 'bar',
        data: {
            labels: ['India', 'USA', 'Europe', 'Other'],
            datasets: [{
                label: 'Responses',
                data: [200, 60, 40, 20], // Total respondents: 320
                backgroundColor: '#5BC0BE'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 320',
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

    // BAR CHART - Entrepreneurship
    const entrepreneurshipCtx = document.getElementById('entrepreneurshipChart').getContext('2d');
    new Chart(entrepreneurshipCtx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No', 'Maybe'],
            datasets: [{
                label: 'Responses',
                data: [50, 180, 90], // Total respondents: 320
                backgroundColor: ['#9BC53D', '#C3423F', '#404E7C']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Respondents - 320',
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