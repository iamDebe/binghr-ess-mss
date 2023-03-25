import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EssHome from "./pages/EssHomepage";
import ProfileSetup from "./pages/ProfileSetup";
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router basename="/ess">
      <Routes>
        <Route path="/" element={<EssHome />} /> 
        <Route path="/profile" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default Main;
