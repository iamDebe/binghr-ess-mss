import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EssHome from "@/pages/EssHomepage";
import MyPay from "@/pages/MyPay";
import TimeSheet from "@/pages/TimeSheet"; 
import ProfileSetup from "@/pages/ProfileSetup"
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/ess" element={<EssHome />} /> 
        <Route path="/ess/timesheet" element={<TimeSheet />} />
        <Route path="/ess/my-pay" element={<MyPay />} />
        <Route path="*" element={<Navigate to="/ess" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
