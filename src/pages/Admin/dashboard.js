import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

// import Components
import Sidebar from '../../Components/Admin/Reusable/dashboardLeftSideBar'
import Header from '../../Components/Admin/headerIcons';

function AdminDashboard() {
    return (
       <div>
        <Sidebar />
        
        <Header />
       </div>
    )
}

export default AdminDashboard