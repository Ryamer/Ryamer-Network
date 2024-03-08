import Layout from '@theme/Layout';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Link from '@docusaurus/Link';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function stats(): JSX.Element {
    const [options, setOptions] = useState([]);
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
            average = average / data.length;
            const xAxis = final.map((item) => new Date(item[0]))
            const yAxis = final.map((item) => item[1])
            setSeries(yAxis)
            setOptions(xAxis)
        });
    }

    return (
        <Layout
            title={`Ryamer Stats`}
            description="See some of our public network stats">
            <ThemeProvider theme={darkTheme}>
                <main>
                    <LineChart
                        height={300}
                        title="IPv6% On Ryamer's network"
                        series={[{ data: series, label: 'IPv6 %', area: true, showMark: false }]}
                        xAxis={[{ scaleType: 'point', data: options }]}
                        sx={{
                            '.MuiLineElement-root': {
                                display: 'none',
                            },
                            marginTop: "50px"
                        }}
                    />
                    <Typography>Data is collected every 10 minutes and stored for approximately one months. We grab the data from our <Link to="https://github.com/akvorado/akvorado">akvorado</Link> instance that's connected to our core router.</Typography>
                </main>
            </ThemeProvider>
        </Layout>
    );
}
