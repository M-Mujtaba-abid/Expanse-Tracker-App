import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, type Transaction } from "../redux/slice/TransactionsSlice";
import type { AppDispatch } from "../redux/store"; // store ka type
import { v4 as uuid } from "uuid";

type Props = {
  type: "credit" | "debit";
  onClose: () => void;
};

const TransactionModal = ({ type, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>(); // strongly typed dispatch

  const [form, setForm] = useState<Omit<Transaction, "id" | "type">>({
    category: "",
    description: "",
    amount: 0,
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        id: uuid(),
        type,
        ...form,
        amount: Number(form.amount),
      })
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 h-full bg-black/30 flex items-center justify-center z-40"
      style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 z-50"
      >
        <h2 className="text-xl font-bold mb-4">
          Add {type === "credit" ? "Credit" : "Debit"}
        </h2>

        <input
          type="text"
          placeholder="Category"
          className="w-full mb-3 p-2 rounded border"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Description"
          className="w-full mb-3 p-2 rounded border"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          className="w-full mb-3 p-2 rounded border"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: Number(e.target.value) })
          }
          required
        />

        <input
          type="date"
          className="w-full mb-4 p-2 rounded border"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-green-500 text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionModal;
