import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-subtitle';

export default function SideBar(props) {
  const [data, setData] = useState({
    bar: [],
    val: [],
    label: [],
    color: [],
  });

  const [id, setId] = useState(0);

  useEffect(() => {
    if (id <= 0) {
      getDoc(doc(db, "1A Data", props.datatype)).then(docSnap => {
        if (docSnap.exists()) {
          let data = {
            barlabel: [],
            barval: [],
            label: [],
            val: [],
            color: [],
            title: '',
            xAxes: '',
            yAxes: '',
            n: '',
          };
          docSnap.data().x.forEach((element) => {
            data.label.push(element.legendIndex);
            data.barval.push(element.barValues);
            data.color.push(element.color);
          });

          for (var i in data.barval) {

            var d = [];
            data.barval[i].forEach(function (elem, index) {

              d.push(parseFloat(elem.barValue.toFixed(2)));
              if (!data.barlabel.includes(elem.barLabel)) {
                data.barlabel.push(elem.barLabel);
              }
            });
            data.val.push(d);

          }

          data.title = docSnap.data().title;
          data.xAxis = docSnap.data().xTitle.label;
          data.yAxis = docSnap.data().y.label;
          data.n = docSnap.data().n;
          setId(id + 1);
          setData(data);

        } else {
          console.log('No such document!');
        }
      })
    }
  }, []);

  function dataset_chartjs(data) {
    var datasets = [];
    var datasets_sorted = [];
    for (var i = 0; i < data.val.length; i++) {
      var add_data = {
        labels: ["Drunk Alcohol", "Smoked/Vaped", "Done Drugs", "Had First Kiss", "Had Sex"],
        label: data.label[i],
        data: data.val[i],
        backgroundColor: data.color[i],
        borderColor: data.color[i],
        hoverBorderWidth: 2,
        sum: data.val[i].reduce((a, b) => a + b, 0),
      };
      datasets.push(add_data);
    }
    datasets = orderBySubKey(datasets, 'sum');

    datasets.forEach(function (elem, index) {
      datasets_sorted.push(elem.value);
    });
    return datasets_sorted;
  }

  function orderBySubKey(input, key) {
    return Object.keys(input)
      .map((key) => ({ key, value: input[key] }))
      .sort((a, b) => a.value[key] - b.value[key]);
  }

  if (data.barlabel === null) {
    data.barlabel = ["Drunk Alcohol", "Smoked/Vaped", "Done Drugs", "Had First Kiss", "Had Sex"];
  }
  return (
    <div>
      <div className="chart">
        <Bar
          data={{
            type: "bar",
            labels: data.barlabel,
            barlabel: data.barlabel,
            datasets: dataset_chartjs(data),
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
              intersect: false,
            },
            plugins: {
              layout: {
                padding: -5,
              },
              legend: {
                display: true,
                position: 'right',
                labels: {
                  usePointStyle: true,
                  boxWidth: 8,
                  padding: 8,
                  font: {
                    family: 'Lexend',
                    size: 12
                  },
                  color: '#a0a0a0',
                },
              },
              title: {
                display: true,
                text: data.title,
                color: '#ffffff',
                font: {
                  family: 'Lexend',
                  size: 15
                },
                padding: 14,
              },
              subtitle: {
                display: true,
                font: {
                  family: 'Lexend',
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
                    family: 'Lexend',
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
                    family: 'Lexend',
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
}