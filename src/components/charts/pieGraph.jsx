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
                };

                docSnap.data().x.forEach((element) => {
                    data.val.push(element.value);
                    data.label.push(element.index);
                    data.color.push(element.color);
                });
                data.title = docSnap.data().title;
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
                <Pie
                    data={{
                        labels: data.label,
                        datasets: [
                            {
                                label: '# of Students',
                                data: data.val,
                                backgroundColor: data.color,
                                borderColor: data.color,
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true },
                            title: {
                                display: true,
                                text: data.title,
                            },
                        }
                    }}
                    height="450px"
                    width="450px"
                />
            </div>
        </div>
    );
}