import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EssMyProfilePage from "./pages/EssMyProfilePage";
import EssHome from "@/pages/EssHomepage";
import ProfileSetup from "@/pages/ProfileSetup";
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/ess" element={<EssHome />} />
        <Route path="ess/profile" element={<ProfileSetup />} />
        <Route path="ess/my-profile" element={<EssMyProfilePage />} />
        <Route path="*" element={<Navigate to="/ess" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
