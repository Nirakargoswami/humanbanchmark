import 'chart.js/auto';
import React, { useState, useRef, useEffect } from 'react'

import { Line } from 'react-chartjs-2';

const Chart = ({labels,data}) => {

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Reaction Time  Line Chart',
                data: data,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    const LineChart = () => {
        return (
            <div>
                <Line data={chartData} options={chartOptions} />
            </div>
        );
    };

    return (
        <LineChart />

    )


}

export default Chart;