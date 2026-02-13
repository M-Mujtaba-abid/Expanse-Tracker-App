import { useSelector } from "react-redux";
import { selectTotalCredit, selectTotalDebit, totalBallance } from "../../redux/selectors/transactionSelectors";
const SummaryCards = () => {

const totalCredit= useSelector(selectTotalCredit)
const totalDebit= useSelector(selectTotalDebit)
const totalBalance= useSelector(totalBallance)
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl shadow">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Balance</h2>
        <p className="text-xl font-bold text-gray-900 dark:text-white">Rs {totalBalance}</p>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl shadow">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Credit</h2>
        <p className="text-xl font-bold text-green-500">Rs {totalCredit}</p>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl shadow">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Debit</h2>
        <p className="text-xl font-bold text-red-500">Rs {totalDebit}</p>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl shadow">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm">This Month</h2>
        <p className="text-xl font-bold text-blue-500">Rs 8,500</p>
      </div>
    </div>
  );
};

export default SummaryCards;
