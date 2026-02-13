import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const BarChart = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  // 12 months structure ready kar lo
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const monthlyData = months.map((month, index) => 
    {
        console.log("month ===========",month)
    const credit = transactions
      .filter(
        t =>
          new Date(t.date).getMonth() === index &&
          t.type === "credit"
      )
      .reduce((acc, t) => acc + t.amount, 0);

    const debit = transactions
      .filter(
        t =>
          new Date(t.date).getMonth() === index &&
          t.type === "debit"
      )
      .reduce((acc, t) => acc + t.amount, 0);

    return { credit, debit };
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "Credit",
        data: monthlyData.map(m => m.credit),
        backgroundColor: "rgba(34,197,94,0.7)",
      },
      {
        label: "Debit",
        data: monthlyData.map(m => m.debit),
        backgroundColor: "rgba(239,68,68,0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#aeaeae" },
      },
    },
    scales: {
      x: { ticks: { color: "#aeaeae" } },
      y: { ticks: { color: "#aeaeae" } },
    },
  };

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
        Monthly Credit vs Debit
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
