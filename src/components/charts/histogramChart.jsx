import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { Bar } from 'react-chartjs-2';

const HistogramPercent = (props) => {
    const [data, setData] = useState({
        val: [],
        label: [],
        color: [],
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
                            color: [],
                            title: '',
                            xAxes: '',
                            yAxes: '',
                            n: '',
                        };

                        let values = [];
                        let allData = await snapshot.data();

                        await allData.x.values.forEach((element) => {
                            values.push(element);
                        });

                        await allData.xLimit.enums.forEach((element) => {
                            //need to take in all of the values, sort them,
                            let value = values.filter((x) => x === element.value).length;
                            data.val.push((value * 100 / values.length).toFixed(2)); //VALUE NEEDS TO BE DETERMINED BY TAKING IN ALL OF THE VALUES AND CALCULATING IT
                            data.label.push(element.index);
                        });

                        data.title = allData.title;
                        data.xAxis = allData.x.label;
                        data.yAxis = allData.y.label;
                        data.color = allData.x.color;
                        data.n = allData.n;
                        setId(id + 1);
                        setData(data);
                    },
                    (err) => {
                        console.log('Error fetching firebase snapshot! ' + err);
                    }
                );
        }
    });

    if (data.color === undefined) {
        data.color = 'rgb(255, 99, 132)';
    }

    return (
        <div>
            {/* <div className="header">
        <h1 className="title">Doughnut</h1>
      </div> */}
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
                                        lineWidth: 1,
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: data.xAxis,
                                        fontColor: '#ffffff',
                                        fontSize: 15,
                                    },
                                    ticks: {
                                        fontColor: '#ffffff',
                                    },
                                },
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
};

const HistogramCount = (props) => {
    const [data, setData] = useState({
        val: [],
        label: [],
        color: [],
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

                        let values = [];
                        let allData = snapshot.data();

                        allData.x.values.forEach((element) => {
                            values.push(parseInt(element.toFixed(2)));
                        });

                        values.sort((a, b) => {
                            //sorted in numerical value
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
                    },
                    (err) => {
                        console.log('Error fetching firebase snapshot! ' + err);
                    }
                );
        }
    });

    return (
        <div>
            {/* <div className="header">
        <h1 className="title">Doughnut</h1>
      </div> */}
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
                                        lineWidth: 1,
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: data.xAxis,
                                        fontColor: '#ffffff',
                                        fontSize: 15,
                                    },
                                    ticks: {
                                        fontColor: '#ffffff',
                                    },
                                },
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
};

export { HistogramCount, HistogramPercent };