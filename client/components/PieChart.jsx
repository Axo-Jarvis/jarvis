import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { BACKGROUND_COLOR, BORDER_COLOR } from './chartColors';
import dummyData from './dummyData';

ChartJS.register(ArcElement, Tooltip, Legend);

// This component is used to render the pie chart in the parent (dashboard) component.
const PieChart = () => {
  const data = {
    labels: ['Need to Complete', 'In Progress', 'Completed'],
    datasets: [
      {
        label: '',
        // Needs to be modified based on data received
        data: [dummyData[0], dummyData[1], dummyData[2]],
        backgroundColor: BACKGROUND_COLOR,
        borderColor: BORDER_COLOR,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        position: 'nearest',
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `${context.parsed}%`;
            }
            return label;
          },
        },
      },
      // Get rid of the title options or use current date/time maybe
      title: {
        display: true,
        text: 'Current Date MAYBE?',
      },
    },
  };

  // can target div and style in css
  return (
    <div
      style={{
        width: '33vw',
        height: '33vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
