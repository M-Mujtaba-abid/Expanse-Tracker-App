import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const PieChart = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  // Sirf debit (expenses) lo
  const expenses = transactions.filter(t => t.type?.toLowerCase() === "debit");
console.log( "from pei chart",expenses);

//   const mainCategories = ["Food", "Transport", "Shopping", "Bills"];

  // Initial totals object
  const totals: Record<string, number> = {
    Food: 0,
    Transport: 0,
    Shopping: 0,
    Bills: 0,
    Others: 0,
  };

const mainCategories = ["food", "transport", "shopping", "bills"];

expenses.forEach(t => {
  const category = t.category.toLowerCase();

  if (mainCategories.includes(category)) {
    const formatted =
      category.charAt(0).toUpperCase() + category.slice(1);

    totals[formatted] += Number(t.amount);
  } else {
    totals["Others"] += Number(t.amount);
  }
});

  const data = {
    labels: Object.keys(totals),
    datasets: [
      {
        data: Object.values(totals),
        backgroundColor: [
          "#F87171",  // Food
          "#60A5FA",  // Transport
          "#34D399",  // Shopping
          "#FBBF24",  // Bills
          "#A78BFA",  // Others
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
        Expense Categories
      </h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
