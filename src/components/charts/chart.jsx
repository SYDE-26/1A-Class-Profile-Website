import BarGraph from "./barGraph"
import BoxPlot from "./boxPlot"
import { HistogramCount } from "./histogramChart"
import PieChart from "./pieGraph"
import Scatterplot from "./scatterPlot"
import StackedBar from "./stackedBar"
import MultiBar from "./multiBar"
import "./charts.scss"

const Chart = ({ type, data, position }) => {
  switch (type) {
    case 'Pie':
      return (
        <div className={position}>
          <PieChart datatype={data} />
        </div >
      );
    case 'Box':
      return (
        <div className={position}>
          <BoxPlot datatype={data} />
        </div >
      );
    case 'Bar':
      return (
        <div className={position}>
          <BarGraph datatype={data} />
        </div >
      );
    case 'Multi':
      return (
        <div className={position}>
          <MultiBar datatype={data} />
        </div >
      );
    case 'Histogram':
      return (
        <div className={position}>
          <HistogramCount datatype={data} />
        </div >
      );
    case 'Scatter':
      return (
        <div className={position}>
          <Scatterplot datatype={data} />
        </div >
      );
    case 'Stacked':
      return (
        <div className={position}>
          <StackedBar datatype={data} />
        </div >
      );
    case 'MultiBar':
      return (
        <div className={position}>
            <MultiBar datatype={data} />
        </div>
      )
    default:
      return (
        <h1>Invalid Chart Type!</h1>
      );
  }
}

export default Chart;