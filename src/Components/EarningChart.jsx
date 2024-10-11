import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EarningsChart = ({ earningsData }) => {
  const data = {
    labels: earningsData.labels,  // Dynamic labels
    datasets: [
      {
        label: 'Earnings',
        data: earningsData.values, // Dynamic data values
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div className="mt-4">
      <h3>Earnings Overview</h3>
      <Bar data={data} className='bg-light p-3' />
    </div>
  );
};

export default EarningsChart;
