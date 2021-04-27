import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
    datasets: [{
        label: "Bitcoin",
        backgroundColor: "rgba(117, 19, 246, 0.1)",
        borderColor: '#0b76b6',
        fill: false,
        data: [20, 25, 45, 35, 45, 40,56],
        lineTension: 0.2,
    },
    {
        label: "Ethereum",
        backgroundColor: "rgba(240, 180, 26, 0.1)",
        borderColor: '#F0B41A',
        fill: false,
        data: [40, 45, 34, 20, 30, 35,66],
        lineTension: 0.2,
    }
]
};

const options = {
    responsive: true,
    plugins: {
    legend: {
        display: false
    },
    // animation: {
    //     easing: "easeInOutBack"
    // },
    scales: {
        y: {
            display: false,
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 0
            },
            gridLines: {
                drawTicks: false,
                display: false
            },
            
        },
        x: {
            display: false,
            gridLines: {
                zeroLineColor: "transparent",
            },
            ticks: {
                padding: 0,
                fontColor: "rgba(0,0,0,0.5)",
                // beginAtZero: true,
                fontStyle: "bold"
            }
        }
    }
}
};

const OverviewChart = () => (   
    <Line data={data} options={options} />
);

export default OverviewChart;