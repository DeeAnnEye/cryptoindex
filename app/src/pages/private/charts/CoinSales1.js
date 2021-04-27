import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Sales",
        backgroundColor: "rgba(117, 19, 246, 0.1)",
        borderColor: '#0b76b6',
        fill: true,
        data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
        lineTension: 0.5,
    }]
};

const options = {
    // responsive: true,
    plugins: {
    legend: {
        display: false
    },
    // animation: {
    //     easing: "easeInOutBack"
    // },
    scales: {
        yAxes: {
            // display: false,
            ticks: {
                // fontColor: "rgba(0,0,0,0.5)",
                // fontStyle: "bold",
                beginAtZero: !0,
                display: false,
                // maxTicksLimit: 5,
                // padding: 0
            },
            gridLines: {
                // drawTicks: false,
                drawBorder: false,
                display: false
            },
            
        },
        xAxes: {            
            gridLines: {
                zeroLineColor: "transparent",
                display: false,
                drawBorder: false,
            },
            ticks: {
                // padding: 0,
                display: false,
                // fontColor: "rgba(0,0,0,0.5)",
                // fontStyle: "bold"
            }
        }
    }
    }
};

const CoinSalesA = () => (     
    <Line data={data} options={options} />   
);

export default CoinSalesA;