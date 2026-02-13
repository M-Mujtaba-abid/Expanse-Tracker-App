import BarChart from "../components/charts/BarChart"
import PieChart from "../components/charts/PieChart"
import RecentTransactions from "../components/charts/RecentTransactions"
import SummaryCards from "../components/charts/SummaryCards"
import expenses from '../assets/expenses.png'



const Dashboard = () => {
  return (
    <div className=' w-full h-full'> 

       <div className="min-h-screen  p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-6">
       


       <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
  {/* Left Side: Text Content */}
  <div>
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
      Expense Insights
    </h1>
    <p className="text-gray-500 dark:text-gray-400 mt-1">
      Take Control of Your Finances
    </p>
  </div>

  {/* Right Side: Logo/Icon */}
  <div className="shrink-0">
    <img 
      src={expenses} 
      alt="Finance Logo" 
      className="w-16 h-16 object-contain"
    />
  </div>
</div>

      <SummaryCards />
      <RecentTransactions />
      <div className="flex flex-col md:flex-row w-full gap-6 h-96">

      <BarChart  />
      <PieChart />
      </div>
    </div>
    </div>
  )
}

export default Dashboard
