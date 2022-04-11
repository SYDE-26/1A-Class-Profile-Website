import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-subtitle';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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
            } else {
                console.log("No such document!");
            }
        })
    }, []);

    if (data.color[0] === undefined) {
        data.color = 'rgb(255, 99, 132)';
    }

    var x = 0;
    var len = data.val.length;
    while (x < len) {
        data.val[x] = Number(data.val[x]).toFixed(2);
        x++;
    }
    console.log("hehe",data.label)
    return (
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
                    plugins: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: data.title,
                            color: '#ffffff',
                            font: {
                                size: 15
                            },
                            padding: 14,
                        },
                        subtitle: {
                            display: true,
                            font: {
                                size: 13
                            },
                            text: 'number of respondents:' + data.n,
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: data.xAxis,
                                color: '#ffffff',
                                font: {
                                    size: 15
                                },
                            },
                            grid: {
                                borderColor: '#fff',
                                color: 'rgba(255, 255, 255, 0.05)',
                                lineWidth: 1 // Don't add a comma on this line lol, it breaks the graphs ¯\_(ツ)_/¯
                            },
                            ticks: {
                                color: '#ffffff',
                                Callback: function (tick, index, values) {
                                    if (tick.length > 9 && values.length >= 4) {
                                        return tick.split(" ");
                                    } else {
                                        return tick
                                    }
                                },
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: data.yAxis,
                                color: '#ffffff',
                                font: {
                                    size: 15
                                },
                            },
                            grid: {
                                borderColor: '#fff',
                                color: 'rgba(255, 255, 255, 0.05)',
                                lineWidth: 1,
                            },
                            ticks: {
                                beginAtZero: true,
                                color: '#ffffff',
                            },
                        }
                    }
                }}
                height={props.height ? props.height : '100%'}
                width={props.width ? props.width : '100%'}
            />
        </div>
    );
}