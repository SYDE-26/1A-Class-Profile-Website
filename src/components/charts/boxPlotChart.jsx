import React from 'react';
import { useState, useEffect, Component, createRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config.js';
import Chart from 'chart.js/auto';
import 'chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js';
import 'chartjs-subtitle';

class BoxPlotChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = createRef();
    }
    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.label;
        this.myChart.data.datasets[0].data = this.props.data.val;
        this.myChart.data.datasets[0].backgroundColor = this.props.data.color;
        this.myChart.data.datasets[0].outlierColor = this.props.data.color;
        this.myChart.options.title.text = this.props.data.title;
        this.myChart.options.plugins.chartJsPluginSubtitle.text = 'number of respondents:' + this.props.data.n;
        this.myChart.options.scales.xAxes[0].scaleLabel.labelString = this.props.data.xAxis;
        this.myChart.options.scales.yAxes[0].scaleLabel.labelString = this.props.data.yAxis;
        this.myChart.options.scales.yAxes[0].ticks.min = this.props.data.ymin;
        this.myChart.options.scales.yAxes[0].ticks.max = this.props.data.ymax;
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'boxplot',
            options: {
                responsive: true,
                maintainAspectRatio: true,
                legend: { display: false },
                title: {
                    display: true,
                    text: this.props.data.title,
                    fontColor: '#ffffff',
                    fontSize: 15,
                    padding: 14,
                },
                plugins: {
                    chartJsPluginSubtitle: {
                        display: true,
                        fontSize: 13,
                        text: 'number of respondents:' + this.props.data.n,
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
                                labelString: this.props.data.xAxis,
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
                                labelString: this.props.data.yAxis,
                                fontColor: '#ffffff',
                                fontSize: 15,
                            },
                            ticks: {
                                fontColor: '#ffffff',
                                min: parseInt(this.props.data.xmin),
                                max: parseInt(this.props.data.xmax),
                            },
                        },
                    ],
                },
            },
            data: {
                labels: this.props.data.label,
                datasets: [
                    {
                        //label: '',
                        data: this.props.data.val,
                        backgroundColor: this.props.data.color,
                        borderColor: 'white',
                        hoverBackgroundColor: 'white',
                        borderWidth: 1.5,
                        outlierColor: this.props.data.color,
                    },
                ],
            },
        });
    }

    render() {
        return (
            <canvas
                ref={this.chartRef}
                height={this.props.height}
                width={this.props.width}
            />
        );
    }
}

export default function BoxPlot(props) {
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
                    ymin: '',
                    ymax: '',
                    n: '',
                };
                docSnap.data().x.values.forEach((element) => {
                    for (var i = 0; i < element.plotValues.length; i++) {
                        element.plotValues[i] = parseFloat(
                            element.plotValues[i].toFixed(2)
                        );
                    }
                    data.val.push(element.plotValues);
                    data.label.push(element.index);
                });
                data.color = docSnap.data().x.color;
                data.title = docSnap.data().title;
                data.xAxis = docSnap.data().x.label;
                data.yAxis = docSnap.data().y.label;
                data.ymin = docSnap.data().yLimit.min;
                data.ymax = docSnap.data().yLimit.max;
                data.n = docSnap.data().n;
                setId(id + 1);
                setData(data);
                console.log(data.val[0][0]);
            } else {
                console.log('No such document!');
            }
        })
    });
    console.log(data);

    if (Number.isInteger(data.val[0][0])) {
        var arrayData = data.label.map(function (d, i) {
            return {
                label: d,
                data: data.val[i],
            };
        });

        var sortedArrayData = arrayData.sort(function (a, b) {
            return a.label - b.label;
        });

        var newArrayLabel = [];
        var newArrayData = [];
        sortedArrayData.forEach(function (d) {
            newArrayLabel.push(d.label);
            newArrayData.push(d.data);
        });

        data.label = newArrayLabel;
        data.val = newArrayData;
    }

    return (
        <div>
            <div className="chart">
                <BoxPlotChart
                    data={data}
                    height={props.height ? props.height : '100%'}
                    width={props.width ? props.width : '100%'}
                />
            </div>
        </div>
    );
}