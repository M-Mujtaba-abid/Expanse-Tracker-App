import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionModal from "../model/TransactionModal";
import type { RootState, AppDispatch } from "../redux/store";
import { type Transaction, deleteTransaction } from "../redux/slice/TransactionsSlice";

const Credits = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // Get only credit transactions
  const credits = useSelector((state: RootState) =>
    state.transactions.transactions.filter(t => t.type === "credit")
  );

  const totalCredits = credits.reduce((acc, t) => acc + t.amount, 0);
  const latestCredit = credits[credits.length - 1];

  return (
    <div className="space-y-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">

      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Credit Transactions</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
        >
          + Add Credit
        </button>
      </div>

      {showModal && (
        <TransactionModal type="credit" onClose={() => setShowModal(false)} />
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Credit</h2>
          <p className="text-xl font-semibold text-green-500">+ Rs {totalCredits}</p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Transactions</h2>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{credits.length}</p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Last Transaction</h2>
          <p className="text-sm">
            {latestCredit ? `+ Rs ${latestCredit.amount}` : "+ Rs 0"}
          </p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-gray-200 dark:bg-gray-800 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((t: Transaction) => (
              <tr key={t.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-3">{t.date}</td>
                <td className="px-4 py-3">{t.description}</td>
                <td className="px-4 py-3 text-green-500 font-medium">+ Rs {t.amount}</td>
                <td className="px-4 py-3">{t.category}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => dispatch(deleteTransaction(t.id))}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Credits;
