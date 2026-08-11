import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChart = () => {

  const data = {
    labels: [
      "Java",
      "React",
      "Python",
      "SQL"
    ],

    datasets: [
      {
        label: "Skills",
        data: [30, 25, 20, 25],
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "right",
      },

      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: "400px" }}>
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
};

export default PieChart;