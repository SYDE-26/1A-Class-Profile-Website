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
                console.log("Document data:", docSnap.data());

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
        <div>
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
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                  usePointStyle: true,
                                  boxWidth: 8,
                                  padding: 8,
                                  size: 12,
                                  color: '#a0a0a0',
                                },
                                display: true,
                              },
                            title: {
                                display: true,
                                text: data.title,
                                size: 15,
                                color: '#ffffff',
                                size: '14',
                                padding: 14,
                            },
                            subtitle: {
                                display: true, 
                                size: 13,
                                text: 'number of respondents:' + data.n, 
                            }
                        }
                    }}
                    height={props.height ? props.height : '100%'}
                    width={props.width ? props.width : '100%'}
                />
            </div>
        </div>
    );
}