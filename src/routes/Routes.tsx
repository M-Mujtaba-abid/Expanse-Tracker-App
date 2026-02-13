import { Routes, Route, Navigate } from "react-router-dom";

import Debits from "../pages/Debits";
import Credits from "../pages/Credits";
import Dashboard from "../layout/Dashboard";
import Layout from "../layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions/debit" element={<Debits />} />
        <Route path="transactions/credit" element={<Credits />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
