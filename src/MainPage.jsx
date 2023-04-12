import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EssHome from "@/pages/EssHomepage";
import MyPay from "@/pages/MyPay";
import OrgChart from "@/pages/OrgChart";
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/ess" element={<EssHome />} /> 
        <Route path="/ess/my-pay" element={<MyPay />} />
        <Route path="/ess/org-chart" element={<OrgChart />} />
        <Route path="*" element={<Navigate to="/ess" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
