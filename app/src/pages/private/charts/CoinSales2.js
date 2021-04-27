import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Sales",
                backgroundColor: "rgba(240, 180, 26, 0.1)",
                borderColor: '#F0B41A',
                fill: true,
                data: [18, 41, 86, 49, 20, 65, 64, 50, 49, 30, 45, 25],
                lineTension: 0.5,
            }]
};

const options = {
    plugins: {
    legend: {
        display: false
    },
    // animation: {
    //     easing: "easeInOutBack"
    // },
    scales: {
        y: [{
            display: false,
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: !0,
                maxTicksLimit: 5,
                padding: 0
            },
            gridLines: {
                drawTicks: false,
                display: false
            }
        }],
        x: [{
            display: false,
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 0,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}
};

const CoinSalesB = () => (
    // <canvas id="coin_sales1" height="100">
    <Line data={data} options={options} />
//   </canvas>
);

export default CoinSalesB;