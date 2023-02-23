import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileSetup from "./pages/ProfileSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
