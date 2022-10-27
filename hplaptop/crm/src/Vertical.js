import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => 50),
        backgroundColor: "rgba(255, 0, 0, 1)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => 150),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
    ],
  };

  return (
    <>
      Test
      <Bar options={options} data={data} />
    </>
  );
}
