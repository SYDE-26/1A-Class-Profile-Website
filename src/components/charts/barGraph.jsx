import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from "firebase/firestore";


import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
//import 'chartjs-subtitle';
import React from 'react';


export default function BarGraph(props) {

    const [data, setData] = useState({
        val: [],
        label: [],
        color: '',
    });

    const [id, setId] = useState(0);

    useEffect(() => {
        
    getDoc(doc(db, "1A Data", props.datatype)).then(docSnap => {
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

        let data = {
            val: [],
            label: [],
            color: '',
            title: '',
            xAxes: '',
            yAxes: '',
            n: '',
        };

        docSnap.data().x.values.forEach((element) => {
            data.val.push(element.value);
            data.label.push(element.index);
        });
        data.color = docSnap.data().x.color;
        data.title = docSnap.data().title;
        data.xAxis = docSnap.data().x.label;
        data.yAxis = docSnap.data().y.label;
        data.n = docSnap.data().n
        setId(id + 1);
        setData(data);

        console.log(data);
    } else {
        console.log("No such document!");
    }
    })

    });

    if (data.color[0] === undefined) {
        data.color = 'rgb(255, 99, 132)';
    }

    var x = 0;
    var len = data.val.length;
    while (x < len) {
        data.val[x] = Number(data.val[x]).toFixed(2);
        x++;
    }

    return (
        <div>
            <div className="chart">
                <Bar
                    data={{
                        labels: data.label,
                        datasets: [
                            {
                                label: '% of Students',
                                data: data.val,
                                backgroundColor: data.color,
                                borderColor: data.color,
                                hoverBackgroundColor: '#ffffff',
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: { display: false },
                        title: {
                            display: true,
                            text: data.title,
                            fontColor: '#ffffff',
                            fontSize: 15,
                            padding: 14,
                        },
                        plugins: {
                            chartJsPluginSubtitle: {
                                display: true,
                                fontSize: 13,
                                text: 'number of respondents:' + data.n,
                            }
                        },
                        scales: {
                            xAxes: [
                                {
                                    gridLines: {
                                        zeroLineColor: '#fff',
                                        color: 'rgba(255, 255, 255, 0.05)',
                                        lineWidth: 1 // Don't add a comma on this line lol, it breaks the graphs ¯\_(ツ)_/¯
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: data.xAxis,
                                        fontColor: '#ffffff',
                                        fontSize: 15,
                                    },
                                    ticks: {
                                        fontColor: '#ffffff',
                                        userCallback: function (tick, index, values) {
                                            if (tick.length > 9 && values.length >= 4) {
                                                return tick.split(" ");
                                            } else {
                                                return tick
                                            }
                                        },
                                    },
                                }
                            ],
                            yAxes: [
                                {
                                    gridLines: {
                                        zeroLineColor: '#fff',
                                        color: 'rgba(255, 255, 255, 0.05)',
                                        lineWidth: 1,
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: data.yAxis,
                                        fontColor: '#ffffff',
                                        fontSize: 15,
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        fontColor: '#ffffff',
                                    },
                                },
                            ],
                        },
                    }}
                    height={props.height ? props.height : '100%'}
                    width={props.width ? props.width : '100%'}
                />
            </div>
        </div>
    );
}