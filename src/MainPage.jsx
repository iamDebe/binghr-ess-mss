import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EssHome from "@/pages/EssHomepage";
import ProfileSetup from "@/pages/ProfileSetup";
import MyPay from "@/pages/MyPay";
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/ess" element={<EssHome />} /> 
        <Route path="/ess/profile" element={<ProfileSetup />} />
        <Route path="/ess/mypay" element={<MyPay />} />
        <Route path="*" element={<Navigate to="/ess" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
