import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Title, Legend, ArcElement } from 'chart.js';

Chart.register(
    Tooltip, Legend, ArcElement, Title
)

function DoughnutChart({projectData}) {
    useEffect(()=> {

    },[projectData])
    const data = {
        labels: [
            'Active',
            'Pending',
            'Completed'
        ],
        datasets: [{
            data: [projectData.active, projectData.pending.length, projectData.completed.length],
            backgroundColor: [
                '#fb7391',
                '#e8e548',
                '#56ff89'
            ],
            hoverBackgroundColor: [
                '#f7315c',
                '#eec13b',
                '#60d617'
            ]
        }]
    };
    const options = {
        responsive : true,
        cutout: '60%',
        plugins : {

            title : {
                display: true,
                text : "Projects Status Chart",
                font: {
                    size: 20
                }
            },

            legend :{
                display: true,
                position: "top"
            }
        },
    }
    return <><Doughnut options={options} data={data} /></>;
}
export default DoughnutChart;