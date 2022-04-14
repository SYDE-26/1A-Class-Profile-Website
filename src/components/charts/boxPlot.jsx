import { useState, useEffect, Component, createRef } from 'react';
import { db } from '../../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import { Chart, LinearScale, CategoryScale } from 'chart.js';
import { BoxPlotController, BoxAndWiskers, Violin, ViolinController } from '@sgratzl/chartjs-chart-boxplot';
//import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
// register controller in chart.js and ensure the defaults are set
Chart.register(BoxPlotController, BoxAndWiskers, Violin, ViolinController, LinearScale, CategoryScale);

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
    this.myChart.options.plugins.title.text = this.props.data.title;
    this.myChart.options.plugins.subtitle.text = 'number of respondents: ' + this.props.data.n;
    this.myChart.options.scales.x.title.text = this.props.data.xAxis;
    this.myChart.options.scales.y.title.text = this.props.data.yAxis;
    this.myChart.options.scales.y.min = this.props.data.ymin;
    this.myChart.options.scales.y.max = this.props.data.ymax;
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'boxplot',
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: this.props.data.title,
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
            text: 'number of respondents: ' + this.props.data.n,
          }
        },
        scales: {
          x: {
              grid: {
                zeroLineColor: '#fff',
                color: 'rgba(255, 255, 255, 0.05)',
                lineWidth: 1,
              },
              title: {
                display: true,
                text: this.props.data.xAxis,
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
              grid: {
                zeroLineColor: '#fff',
                color: 'rgba(255, 255, 255, 0.05)',
                lineWidth: 1,
              },
              title: {
                display: true,
                text: this.props.data.yAxis,
                color: '#ffffff',
                font: {
                  family: 'Lexend',
                  size: 15
                },
              },
              ticks: {
                color: '#ffffff',
              },
              min: parseInt(this.props.data.xmin),
              max: parseInt(this.props.data.xmax),
            },
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
            outlierColor: 'white',
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

///////////////////////////////////////////////////////

export default function BoxPlot(props) {

  console.log(props)
  const [data, setData] = useState({
    val: [],
    label: [],
    color: '',
  });

  const [id, setId] = useState(0);

  useEffect(() => {
    getDoc(doc(db, "1A Data", props.datatype)).then(docSnap => {
      if (docSnap.exists()) {
            let data = {
              val: [],
              label: [],
              color: '',
              title: '',
              xAxis: '',
              yAxis: '',
              ymin: '',
              ymax: '',
              n: '',
            };
            
            if (props.datatype !== 'lectureAttendedVSClass') {

              docSnap.data().x.values.forEach((element) => {
                for (var i = 0; i < element.plotValues.length; i++) {
                  element.plotValues[i] = parseFloat(
                    Number(element.plotValues[i]).toFixed(2)
                  );
                }
                data.val.push(element.plotValues);
                data.label.push(element.index);
              });

              data.color = docSnap.data().x.color;
              data.xAxis = docSnap.data().x.label;

            } else {

              const xValues = docSnap.data().x;
              

              for (var i = 0; i < 6; i++) {
                const temp = xValues[i].plotValues
                const temp2 = xValues[i].plotValyes
                const temp3 = xValues[i].plotValue

                if (i === 3 ) {
                  data.val.push(temp2);
                } else if (i === 5) {
                  data.val.push(temp3);
                } else {
                  data.val.push(temp);
                }
                
                data.label.push(xValues[i].index);
              }
              
              data.color = docSnap.data().xItem.color;
              data.xAxis = docSnap.data().xItem.label;
            }
            
            

            //data.color = docSnap.data().x.color;
            data.title = docSnap.data().title;
            //data.xAxis = docSnap.data().x.label;
            data.yAxis = docSnap.data().y.label;
            data.ymin = docSnap.data().yLimit.min;
            data.ymax = docSnap.data().yLimit.max;
            data.n = docSnap.data().n;
            setId(id + 1);
            setData(data);
            console.log(data)
          } else {
            console.log("No such document!");
          }
      })
  }, [] );

  if (Number.isInteger(data.label[0])) {
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