import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSetup from "./pages/ProfileSetup";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default Main;
