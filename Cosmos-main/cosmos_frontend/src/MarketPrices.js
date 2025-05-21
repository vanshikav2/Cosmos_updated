import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import Sidebar from './components/shared/Sidebar';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MarketPrices = () => {
  const [pricesUSD, setPricesUSD] = useState([]);
  const [pricesCAD, setPricesCAD] = useState([]);

  // Fetch Ethereum prices from the API for USD and CAD
  const fetchData = async () => {
    try {
      // Fetch data for USD
      const responseUSD = await axios.get(
        'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7'
      );
      setPricesUSD(responseUSD.data.prices);

      // Fetch data for CAD
      const responseCAD = await axios.get(
        'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=cad&days=7'
      );
      setPricesCAD(responseCAD.data.prices);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    // Set interval to update every minute
    const interval = setInterval(fetchData, 60000); // 60000 ms = 1 minute
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Prepare chart data for USD and CAD
  const getChartData = (prices) => ({
    labels: prices.map((price) => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Ethereum Price',
        data: prices.map((price) => price[1]),
        fill: true,
        backgroundColor: 'rgba(173, 216, 230, 0.2)', // Light blue with opacity
        borderColor: 'rgba(0, 123, 255, 0.8)', // Light blue line
        pointRadius: 0, // Remove points for a cleaner look
        borderWidth: 2, // Thicker line for visibility
      },
    ],
  });

  const getChartOptions = () => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#007bff', // Tooltip background color
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)', // Light grid lines
        },
        ticks: {
          color: '#666',
          callback: (value) => `$${value}`, // Display currency symbol
        },
      },
    },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
       <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Market Prices
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar/>
      {/* First Chart (USD) */}
      <div style={{ width: '45%', height: '300px' }}>
       <h3>Ethereum Price in USD</h3> 
        {pricesUSD.length > 0 ? (
          <Line data={getChartData(pricesUSD)} options={getChartOptions()} />
        ) : (
          <p>Loading USD data...</p>
        )}
      </div>

      {/* Second Chart (CAD) */}
      <div style={{ width: '45%', height: '300px' }}>
        <h3>Ethereum Price in CAD</h3>
        {pricesCAD.length > 0 ? (
          <Line data={getChartData(pricesCAD)} options={getChartOptions()} />
        ) : (
          <p>Loading CAD data...</p>
        )}
      </div>
    </div>
  );
};

export default MarketPrices;
