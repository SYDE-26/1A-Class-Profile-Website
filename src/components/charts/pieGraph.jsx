import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
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
                        };

                        await snapshot.data().x.forEach((element) => {
                            data.val.push(element.value);
                            data.label.push(element.index);
                            data.color.push(element.color);
                        });
                        data.title = snapshot.data().title;
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
                        legend: { display: false },
                        title: {
                            display: true,
                            text: data.title,
                        },
                    }}
                    height="450px"
                    width="450px"
                />
            </div>
        </div>
    );
}