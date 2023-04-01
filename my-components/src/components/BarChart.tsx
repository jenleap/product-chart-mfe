import React, { useEffect } from 'react';
import './BarChart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type BarChartProps = {
    title: string;
    xAxisCat: string[];
    yAxisTitle: string;
    dataValues: number[];
}

function BarChart(props: BarChartProps) {

    const { title, xAxisCat, yAxisTitle, dataValues } = props;

    const options = {
        chart: {
          type: 'column'
        },
        title: {
          text: title
        },
        xAxis: {
            categories: xAxisCat,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
              text: yAxisTitle
            }
          },
        series: [
          {
            data: dataValues
          }
        ]
      };


  return (
    <div className="bar-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BarChart;