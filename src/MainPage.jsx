import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSetup from "./pages/ProfileSetup";
import EssHome from "./pages/EssHomepage";
import EssMyProfilePage from "./pages/EssMyProfilePage";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSetup />} />
        <Route path="/ess" element={<EssHome />} />
        <Route path="/my-profile" element={<EssMyProfilePage />} />
      </Routes>
    </Router>
  );
}

export default Main;
