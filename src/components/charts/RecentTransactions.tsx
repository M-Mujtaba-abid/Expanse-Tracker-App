import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const RecentTransactions = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  const recentTransactions = [...transactions]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4 overflow-x-auto">
      {/* <h2 className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
      </h2> */}

      <table className="min-w-full text-left text-gray-900 dark:text-white">
        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm uppercase">
          <tr>
            <th className="px-4 py-2">        Recent Transactions
</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2 text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {recentTransactions.map((t) => (
            <tr
              key={t.id}
              className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              {/* Left Side (Icon + Info) */}
              <td className="px-4 py-3 flex items-center gap-3">
                
                {/* Icon Circle */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg ${
                    t.type === "credit"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {t.type === "credit" ? "⬆" : "⬇"}
                </div>

                {/* Description */}
                <div>
                  <p className="font-medium">{t.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.category}
                  </p>
                </div>
              </td>

              {/* Date */}
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                {t.date}
              </td>

              {/* Amount */}
              <td
                className={`px-4 py-3 text-right font-semibold ${
                  t.type === "credit"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {t.type === "credit" ? "+" : "-"} Rs {t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
