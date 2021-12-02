import React from "react";

function TopBar() {
  return (
    <div className="header">
      <nav>
        <button class="btn btn-primary logo">M</button>
        <span class="h-text">Admin Panel | Dashboard</span>
        <span><input placeholder="Service Search" class="input-box"></input></span>
        <span><a class="btn btn-primary s-button">Search</a>  </span>
      </nav>
    </div>
  );
}
export default TopBar;
