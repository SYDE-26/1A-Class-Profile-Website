import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-subtitle';

export default function PieChart(props) {
    const [data, setData] = useState({
        val: [],
        label: [],
        color: [],
    });

    const [id, setId] = useState(0);

    useEffect(() => {

        getDoc(doc(db, "1A Data", props.datatype)).then(docSnap => {
            if (docSnap.exists()) {

                let data = {
                    val: [],
                    label: [],
                    color: [],
                    title: '',
                    n: ''
                };

                docSnap.data().x.forEach((element) => {
                    data.val.push(element.value);
                    data.label.push(element.index);
                    data.color.push(element.color);
                });
                data.title = docSnap.data().title;
                data.n = docSnap.data().n;
                setId(id + 1);
                setData(data);

            } else {
                console.log('No such document!');
            }
        })
    }, []);

    var arrayData = data.label.map(function (d, i) {
        return {
            label: d,
            data: data.val[i],
            color: data.color[i],
        };
    });

    var sortedArrayData = arrayData.sort(function (a, b) {
        return b.data - a.data;
    });

    var newArrayLabel = [];
    var newArrayData = [];
    var newArrayColor = [];
    sortedArrayData.forEach(function (d) {
        newArrayLabel.push(d.label);
        newArrayData.push(d.data);
        newArrayColor.push(d.color);
    });

    return (
        <div className="chart">
            <Pie
                data={{
                    labels: newArrayLabel,
                    datasets: [
                        {
                            label: '# of Students',
                            data: newArrayData,
                            backgroundColor: newArrayColor,
                            borderColor: newArrayColor,
                            hoverBorderColor: '#ffffff',
                            hoverBorderWidth: 2,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 8,
                                padding: 20,
                                font: function(context) {
                                    var width = context.chart.width;
                                    var size = Math.round(width / 45);
                    
                                    return {
                                        family: 'Lexend',
                                        size: size
                                    };
                                },
                                color: '#a0a0a0',
                            },
                            display: true,
                            
                        },
                        title: {
                            display: true,
                            text: data.title,
                            font: function(context) {
                                var width = context.chart.width;
                                var size = Math.round(width / 32);
                
                                return {
                                    family: 'Lexend',
                                    size: size
                                };
                            },
                            color: '#ffffff',
                            size: 14,
                            padding: 14,
                        },
                        subtitle: {
                            display: true,
                            font: function(context) {
                                var width = context.chart.width;
                                var size = Math.round(width / 40);
                
                                return {
                                    family: 'Lexend',
                                    size: size
                                };
                            },
                            text: 'number of respondents: ' + data.n,
                            padding: {
                                bottom: 20
                            }
                        }

                    }

                }}
                height={props.height ? props.height : '100%'}
                width={props.width ? props.width : '100%'}
            />
        </div>
    );
}