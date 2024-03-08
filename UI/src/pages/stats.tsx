import Layout from '@theme/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IPv6Stats from '../components/HomepageFeatures/Stats/IPv6Stats';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



export default function stats() {
    return (
        <Layout
            title={`Network Stats`}
            description="See some of our public network stats">
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <IPv6Stats />
                </ThemeProvider>
            </QueryClientProvider>
        </Layout>
    );
}
