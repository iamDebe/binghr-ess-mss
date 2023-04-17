import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EssMyProfilePage from "@/pages/EssMyProfilePage";
import EssHome from "@/pages/EssHomepage";
import MyPay from "@/pages/MyPay";
<<<<<<< HEAD
import OrgChart from "@/pages/OrgChart";
=======
import TimeSheet from "@/pages/TimeSheet";
>>>>>>> 8867b5df86c5c0846a5224550078c7929678b7bd
window.base_url = import.meta.env.VITE_BASE_URL;

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/ess" element={<EssHome />} /> 
        <Route path="/ess/my-pay" element={<MyPay />} />
        <Route path="/ess/org-chart" element={<OrgChart />} />
        <Route path="ess/my-profile" element={<EssMyProfilePage />} />
        <Route path="/ess/timesheet" element={<TimeSheet />} />
        <Route path="*" element={<Navigate to="/ess" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
