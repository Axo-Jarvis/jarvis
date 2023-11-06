import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BACKGROUND_COLOR, BORDER_COLOR } from './chartColors';
import dummyData from './dummyData';

Chart.register(...registerables);

// This component is used to render the status bar on top the dashboard.
const StatusBar = () => {
  const data = {
    // can use " labels: [''] " for cleaner UI
    labels: ['Status'],

    // ^Need to change the label names depending on the exact words used in parent (dashboard) component
    // *Need to change how data is handled. Need more information about data format/structure
    // Need to modify colors to fit overall theme
    datasets: [
      {
        // ^label 1 - needs to be changed
        label: 'Need to Complete',
        // *data 1 - needs to be changed
        data: [dummyData[0]],
        backgroundColor: BACKGROUND_COLOR[0],
        borderColor: BORDER_COLOR[0],
        borderWidth: 3,
      },
      {
        // ^label 2 - needs to be changed
        label: 'In Progress',
        // *data 2 - needs to be changed
        data: [dummyData[1]],
        backgroundColor: BACKGROUND_COLOR[1],
        borderColor: BORDER_COLOR[1],
        borderWidth: 3,
      },
      {
        // ^label 3 - needs to be changed
        label: 'Completed',
        // *data 3 - needs to be changed
        data: [dummyData[2]],
        backgroundColor: BACKGROUND_COLOR[2],
        borderColor: BORDER_COLOR[2],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        display: false,
      },
      y: {
        stacked: true,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'nearest',
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.x !== null) {
              label += `${context.parsed.x}%`;
            }
            return label;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  // can target div and style in css
  return (
    <div style={{ height: '50px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatusBar;
