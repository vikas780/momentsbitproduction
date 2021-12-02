import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Components
import Sidebar from "../../Components/Admin/Reusable/dashboardLeftSideBar";
import Header from "../../Components/Admin/headerIcons";

function AdminDashboard() {
  return (
    <div class="col-md-12">
      <div className="row">
        <Header />

        <div className="col-md-1">
          <Sidebar />
        </div>

        {/* 2nd Panel */}

        <div className="col-md-7 sections">Graphs</div>

        <div className="col-md-4 section sections">Status</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
