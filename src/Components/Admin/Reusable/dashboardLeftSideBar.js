import React from 'react'
import {Link} from 'react-router-dom'
import * as icons from 'react-icons/fa';
import '../../Style/admin.css';

// Page Imports 

import dashboardData from './dashboardLeftSideBarItems';
import { IconContext } from 'react-icons';

const DashboardLeftSideBar = () => {

        return(
            
            <div class="left-menu">
                <div>
                    <h2 class="dash-title">Moments Bit</h2>
                    <nav className="menu-items">
                        <ul>
                            {dashboardData.map((item, index) => {
                                return (
                                    <li key={index} class="list-des">
                                        <Link to={item.path} style={{ textDecoration: 'none' }}>
                                            <div class="dash-items">
                                                <span class="icon">{item.icon} </span>
                                                <span>{item.title}</span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        )
}



export default DashboardLeftSideBar