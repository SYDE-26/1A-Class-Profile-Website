import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-subtitle';

const HistogramPercent = (props) => {
    const [data, setData] = useState({
        val: [],
        label: [],
        color: [],
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

                let values = [];
                let allData = docSnap.data();

                allData.x.values.forEach((element) => {
                    values.push(element);
                });

                allData.xLimit.enums.forEach((element) => {
                    let value = values.filter((x) => x === element.value).length;
                    data.val.push((value * 100 / values.length).toFixed(2)); //VALUE NEEDS TO BE DETERMINED BY TAKING IN ALL OF THE VALUES AND CALCULATING IT
                    data.label.push(element.index);
                });

                data.title = allData.title;
                data.xAxis = allData.x.title;
                data.yAxis = allData.y.label;
                data.color = allData.x.color;
                data.n = allData.n;
                setId(id + 1);
                setData(data);
            } else {
                console.log('No such document!');
            }
        })
    }, []);

    if (data.color === undefined) {
        data.color = 'rgb(255, 99, 132)';
    }

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
                            barPercentage: 1.3,
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
                        x:
                        {
                            grid: {
                                zeroLineColor: '#fff',
                                color: 'rgba(255, 255, 255, 0.05)',
                                lineWidth: 1,
                            },
                            title: {
                                display: true,
                                text: data.xAxis,
                                color: '#ffffff',
                                font: {
                                    size: 15
                                },
                            },
                            ticks: {
                                color: '#ffffff',
                            },
                        },
                        y:
                        {
                            grid: {
                                zeroLineColor: '#fff',
                                color: 'rgba(255, 255, 255, 0.05)',
                                lineWidth: 1,
                            },
                            title: {
                                display: true,
                                text: data.yAxis,
                                color: '#ffffff',
                                font: {
                                    size: 15
                                },
                            },
                            ticks: {
                                beginAtZero: true,
                                color: '#ffffff',
                            },
                        },
                    },

                }}
                height={props.height ? props.height : '100%'}
                width={props.width ? props.width : '100%'}
            />
        </div>
    );
};

const HistogramCount = (props) => {
    const [data, setData] = useState({
        val: [],
        label: [],
        color: [],
    });
    const [id, setId] = useState(0);

    useEffect(() => {
        getDoc(doc(db, "1A Data", props.datatype)).then(docSnap => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                console.log('Hargun');

                let data = {
                    val: [],
                    label: [],
                    color: '',
                    title: '',
                    xAxes: '',
                    yAxes: '',
                    n: '',
                };

                let values = [];
                let allData = docSnap.data();

                allData.x.values.forEach((element) => {
                    values.push(parseInt(element.toFixed(2)));
                });

                values.sort((a, b) => {
                    return a - b;
                });

                let min = allData.xLimit.min;
                let max = allData.xLimit.max;

                for (let i = min; i <= max; i++) {
                    data.label.push(i);
                    data.val.push(0); //for each element, will push a 0 value which will be changed later
                }

                //need to go through all of the grades
                //need to check that grade is inbetween itself and its num + 1
                let counter = 0;
                let valueptr = 0;

                try {
                    while (valueptr < values.length) {
                        if (valueptr >= values.length) {
                            break;
                        }
                        if (
                            values[valueptr] >= data.label[counter] &&
                            values[valueptr] < data.label[counter] + 1
                        ) {
                            valueptr += 1;
                            data.val[counter] += 1;
                        } else {
                            counter += 1;
                        }
                    }
                } catch (err) {
                    console.log(err);
                }

                data.title = allData.title;
                data.xAxis = allData.x.label;
                data.yAxis = allData.y.label;
                data.color = allData.x.color;
                data.n = allData.n;
                setId(id + 1);
                setData(data);

            } else {
                console.log('No such document!');
            }
        })
    }, []);

    return (
        <div>
            <div className="chart">
                <Bar
                    data={{
                        labels: data.label,
                        datasets: [
                            {
                                label: '# of Students',
                                data: data.val,
                                backgroundColor: data.color,
                                // borderColor: 'white',
                                hoverBackgroundColor: '#ffffff',
                                borderWidth: 0.5,
                                barPercentage: 1.3,
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
                                text: 'number of respondents: ' + data.n,
                            },
                        },
                        scales: {
                            x:
                            {
                                grid: {
                                    zeroLineColor: '#fff',
                                    color: 'rgba(255, 255, 255, 0.05)',
                                    lineWidth: 1,
                                },
                                title: {
                                    display: true,
                                    text: data.xAxis,
                                    color: '#ffffff',
                                    font: {
                                        size: 15
                                    },
                                },
                                ticks: {
                                    color: '#ffffff',
                                },
                            },
                            y:
                            {
                                grid: {
                                    zeroLineColor: '#fff',
                                    color: 'rgba(255, 255, 255, 0.05)',
                                    lineWidth: 1,
                                },
                                title: {
                                    display: true,
                                    text: data.yAxis,
                                    color: '#ffffff',
                                    font: {
                                        size: 15
                                    },
                                },
                                ticks: {
                                    beginAtZero: true,
                                    color: '#ffffff',
                                },
                            },
                        },
                    }}
                    height={props.height ? props.height : '100%'}
                    width={props.width ? props.width : '100%'}
                />
            </div>
        </div>
    );
};

export { HistogramCount, HistogramPercent };