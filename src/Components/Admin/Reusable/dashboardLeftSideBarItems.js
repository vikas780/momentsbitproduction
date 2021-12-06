import React from "react";

// Pages Links Imports
import Statics from "../../../pages/Admin/statics";
import PostManager from "../../../pages/Admin/postManager";
import Services from "../../../pages/Admin/statics";

// Icon Imports
import * as icons from "react-icons/fa";

const items = [
  {
    title: "Statics",
    icon: <icons.FaRegChartBar />,
    path: "/admin/Statics",
    cName: "nav-item-text",
  },
  {
    title: "Services",
    icon: <icons.FaServicestack />,
    path: "/admin/Login",
    cName: "nav-item-text",
  },
  {
    title: "User Management",
    icon: <icons.FaUserCog />,
    path: "/",
    cName: "nav-item-text",
  },
  {
    title: "Post Manager",
    icon: <icons.FaRegEdit />,
    path: "/",
    cName: "nav-item-text",
  },
];

export default items;
