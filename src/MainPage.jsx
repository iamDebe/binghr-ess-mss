import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSetup from "./pages/ProfileSetup";
import EssHome from "./pages/EssHomepage";
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSetup />} />
        <Route path="/ess" element={<EssHome />} />
      </Routes>
    </Router>
  );
}

export default Main;
