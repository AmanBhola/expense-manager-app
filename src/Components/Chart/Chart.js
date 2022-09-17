import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {

  //console.log(props.dataPoints);
  const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
  const totalMaximum =  Math.max(...dataPointValues);
  console.log(totalMaximum);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
      ;
    </div>
  );
}

export default Chart;
