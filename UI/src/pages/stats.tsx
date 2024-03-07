import Layout from '@theme/Layout';
import axios from 'axios';
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
          const xAxis = final.map((item) => new Date(item[0]))
          const yAxis = final.map((item) => item[1])

        });
      }

  return (
    <Layout
      title={`Ryamer Stats`}
      description="See some of our public network stats">
      <main>

      </main>
    </Layout>
  );
}
