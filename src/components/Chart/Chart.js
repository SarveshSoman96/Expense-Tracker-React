import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ datapoints }) {
  return (
    <div className="chart">
      {datapoints.map((datapoint) => (
        <ChartBar key={datapoint.lable} value={datapoint.value} maxValue={datapoint.value} lable={datapoint.lable} />
      ))}
    </div>
  );
}

export default Chart;
