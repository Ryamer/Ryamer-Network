import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';
import Link from '@docusaurus/Link';
import { useQuery } from '@tanstack/react-query';

const getIPv6DataFromBackend = async () => {
    const res = await fetch("https://network.ryamer.com/ipv6");
    if (res.ok) {
        const results = await res.json();
        return results;
    } else {
        throw "Could Not Get Data"
    }
}

export default function IPv6Stats() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['ipv6'],
        queryFn: getIPv6DataFromBackend
    });

    if (isLoading) {
        return "Loading Data...";
    }

    if (error) {
        return "Error Loading Data";
    }


    const final = [];
    let average = 0;
    for (const dataPoint of data) {
        final.push([dataPoint.time, dataPoint.ipv6]);
        average += dataPoint.ipv6;
    }
    average = average / data.length;
    const xAxis = final.map((item) => new Date(item[0]))
    const yAxis = final.map((item) => item[1])


    return (
        <>
            <LineChart
                height={300}
                title="IPv6% On Ryamer's network"
                series={[{ data: yAxis, label: 'IPv6 %', area: true, showMark: false }]}
                xAxis={[{ scaleType: 'point', data: xAxis }]}
                sx={{
                    '.MuiLineElement-root': {
                        display: 'none',
                    },
                    marginTop: "50px"
                }}
            />
            <Typography>Data is collected every 10 minutes and stored for approximately one months. We grab the data from our <Link to="https://github.com/akvorado/akvorado">akvorado</Link> instance that's connected to our core router.</Typography>
        </>
    );
}
