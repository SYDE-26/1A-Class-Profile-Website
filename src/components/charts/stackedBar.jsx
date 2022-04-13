import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-subtitle';

export default function StackedBar(props) {
  const [data, setData] = useState({
    bar: [],
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
          barlabel: [],
          barval: [],
          label: [],
          val: [],
          color: [],
          title: '',
          xAxis: '',
          yAxis: '',
          n: '',
          xAxisID: 'xAxes',
          yAxisID: 'yAxes'
        };
        docSnap.data().x.bars.forEach((element) => {
          data.label.push(element.legendIndex);
          data.barval.push(element.barValues);
          data.color.push(element.color);
        });

        for (var i in data.barval) {
          var d = [];
          data.barval[i].forEach(function (elem, index) {
            d.push(parseFloat(Number(elem.barValue).toFixed(2)));
            if (!data.barlabel.includes(elem.barLabel)) {
              data.barlabel.push(elem.barLabel);
            }
          });
          data.val.push(d);
        }

        data.title = docSnap.data().title;
        data.xAxis = docSnap.data().x.label;
        data.yAxis = docSnap.data().y.label;
        data.n = docSnap.data().n;
        setId(id + 1);
        setData(data);
      } else {
        console.log("No such document!");
      }
    })
  }, []);

  function dataset_chartjs(data) {
    var datasets = [];
    var datasets_sorted = [];
    for (var i = 0; i < data.val.length; i++) {
      var add_data = {
        label: data.label[i],
        data: data.val[i],
        backgroundColor: data.color[i],
        //borderColor: 'black',
        borderWidth: 1,
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

  const optionInformation = {


  }

  console.log("Options: ", optionInformation);
  return (
    <div className="chart">
      <Bar
        data={{
          labels: data.barlabel,
          datasets: dataset_chartjs(data),
        }}

        options={
          {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                display: true,
                reverse: true,
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
                text: 'number of respondents: ' + data.n,
              },
            },
            scales: {
              x: {
                stacked: true,
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
              y: {
                stacked: true,
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
            }
          }}

        //   options={{
        //     responsive: true,
        //     maintainAspectRatio: true,
        //     legend: {
        //       display: true,
        //       reverse: true,
        //       position: 'right',
        //       labels: {
        //         usePointStyle: true,
        //         boxWidth: 8,
        //         padding: 8,
        //         fontSize: 12,
        //         fontColor: '#a0a0a0',
        //       },
        //     },
        //     title: {
        //       display: true,
        //       text: data.title,
        //       fontColor: '#ffffff',
        //       fontSize: 15,
        //       padding: 14,
        //     },
        //     plugins: {
        //       chartJsPluginSubtitle: {
        //       display: true, 
        //       fontSize: 13,
        //       text: 'number of respondents:' + data.n, 
        //      }
        //     },
        //     scales: {
        //       xAxes: [
        //         {
        //           stacked: true,
        //           scaleLabel: {
        //             display: true,
        //             labelString: data.xAxes,
        //             fontColor: '#ffffff',
        //             fontSize: 15,
        //           },
        //           ticks: {
        //             fontColor: '#ffffff',
        //           },
        //         },
        //       ],
        //       yAxes: [
        //         {
        //           stacked: true,
        //           scaleLabel: {
        //             display: true,
        //             labelString: data.yAxes,
        //             fontColor: '#ffffff',
        //             fontSize: 15,
        //           },
        //           ticks: {
        //             beginAtZero: true,
        //             fontColor: '#ffffff',
        //           },
        //         },
        //       ],
        //     },
        //   }}
        height={props.height ? props.height : '100%'}
        width={props.width ? props.width : '100%'}
      />
    </div>
  );
}