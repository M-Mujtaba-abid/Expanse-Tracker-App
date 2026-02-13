import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionModal from "../model/TransactionModal";
import type { RootState, AppDispatch } from "../redux/store";
import {  deleteTransaction } from "../redux/slice/TransactionsSlice";
import type {Transaction} from '../redux/slice/TransactionsSlice'
const Debits = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // Get only debit transactions
  const debits = useSelector((state: RootState) =>
    state.transactions.transactions.filter(t => t.type === "debit")
  );

  const totalDebits = debits.reduce((acc, t) => acc + t.amount, 0);
  const latestDebit = debits[debits.length - 1];

  return (
    <div className="space-y-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">

      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Debit Transactions</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
        >
          + Add Debit
        </button>
      </div>

      {showModal && (
        <TransactionModal type="debit" onClose={() => setShowModal(false)} />
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Debit</h2>
          <p className="text-xl font-semibold text-red-500">Rs {totalDebits}</p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Transactions</h2>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{debits.length}</p>
          {/* You can calculate monthly total here if needed */}
          
          
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Last Transaction</h2>
          <p className="text-sm">
            {latestDebit ?` Rs ${latestDebit.amount}` : "No transactions"}
          </p>
        </div>
      </div>

      {/* Transactions Table */}
      {/* Desktop Table */}
<div className="hidden md:block bg-gray-200 dark:bg-gray-800 rounded-xl shadow overflow-x-auto">
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
      {debits.map((t: Transaction) => (
        <tr key={t.id} className="border-t border-gray-200 dark:border-gray-700">
          <td className="px-4 py-3">{t.date}</td>
          <td className="px-4 py-3">{t.description}</td>
          <td className="px-4 py-3 text-red-500 font-medium">
            Rs {t.amount}
          </td>
          <td className="px-4 py-3">{t.category}</td>
          <td className="px-4 py-3">
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

{/* Mobile Card Layout */}
<div className="md:hidden space-y-4">
  {debits.map((t: Transaction) => (
    <div
      key={t.id}
      className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow space-y-2"
    >
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{t.date}</span>
        <span className="text-red-500 font-semibold">
          Rs {t.amount}
        </span>
      </div>

      <div className="font-medium">{t.description}</div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        Category: {t.category}
      </div>

      <button
        onClick={() => dispatch(deleteTransaction(t.id))}
        className="text-red-500 text-sm hover:underline"
      >
        Delete
      </button>
    </div>
  ))}
</div>


    </div>
  );
};

export default Debits;
