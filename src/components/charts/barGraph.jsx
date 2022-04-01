import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { Bar } from 'react-chartjs-2';
//import 'chartjs-subtitle';
import React from 'react';

export default function BarGraph(props) {

    console.log(db.collection);
    const [data, setData] = useState({
        val: [],
        label: [],
        color: '',
    });

    const [id, setId] = useState(0);

    useEffect(() => {
        if (id <= 0) {
            db.collection('1A Data')
                .doc(props.datatype)
                .onSnapshot(
                    async (snapshot) => {
                        let data = {
                            val: [],
                            label: [],
                            color: '',
                            title: '',
                            xAxes: '',
                            yAxes: '',
                            n: '',
                        };
                        await snapshot.data().x.values.forEach((element) => {
                            data.val.push(element.value);
                            data.label.push(element.index);
                        });
                        data.color = snapshot.data().x.color;
                        data.title = snapshot.data().title;
                        data.xAxis = snapshot.data().x.label;
                        data.yAxis = snapshot.data().y.label;
                        data.n = snapshot.data().n
                        setId(id + 1);
                        setData(data);
                    },
                    (err) => {
                        console.log('Error fetching firebase snapshot! ' + err);
                    }
                );
        }
    });

    if (data.color[0] === undefined) {
        data.color = 'rgb(255, 99, 132)';
    }

    var x = 0;
    var len = data.val.length;
    while (x < len) {
        data.val[x] = data.val[x].toFixed(2);
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