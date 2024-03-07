import Layout from '@theme/Layout';
import axios from 'axios';
import Chart from "react-apexcharts";
import { useEffect, useState } from 'react';

export default function stats(): JSX.Element {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);

    useEffect(() => {
        renderChart();
    }, []);
    function renderChart() {
        axios("https://network.ryamer.com/ipv6").then((res) => {
          const data = res.data;
          const final = [];
          let average = 0;
          for (const dataPoint of data) {
            final.push([dataPoint.time, dataPoint.ipv6]);
            average += dataPoint.ipv6;
          }
          const firstDay = final[0][0];
          const lastDay = final[final.length - 1][0];
          average = average / data.length;
          setSeries([{
            name: "IPv6 Usage %",
            data: final
          }]);
          setOptions({
            chart: {
              id: 'area-datetime',
              height: 350,
              zoom: {
                enabled: true,
                autoScaleYaxis: true
              }
            },
            annotations: {
              yaxis: [{
                y: average,
                borderColor: '#999',
                label: {
                  show: true,
                  text: 'Average',
                  style: {
                    color: "#fff",
                    background: '#00E396'
                  }
                }
              }],
              xaxis: []
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
              style: 'hollow',
            },
            xaxis: {
              type: 'datetime',
              min: new Date().getTime(),
              tickAmount: 6,
            },
            tooltip: {
              x: {
                format: 'dd MMM yyyy'
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            },
            title: {
              text: "IPv6 Usage",
              align: 'center',
            }
          });
        })
      }

  return (
    <Layout
      title={`Ryamer Stats`}
      description="See some of our public network stats">
      <main>
      <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="area"
              width="1000"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
