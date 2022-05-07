import React from "react";
import { NavLink } from "react-router-dom";
import "./mysidebar.scss";

function Mysidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="dashboard">
            <i className="bx bx-home-alt"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="revenue">
            <i className="bx bx-bar-chart-alt-2 icon"></i>
            <span className="text nav-text">Revenue</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications">
            <i className="bx bx-bell icon"></i>
            <span className="text nav-text">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="analytics">
            <i className="bx bx-pie-chart-alt icon"></i>
            <span className="text nav-text">Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="likes">
            <i className="bx bx-heart icon"></i>
            <span className="text nav-text">Likes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="wallets">
            <i className="bx bx-wallet icon"></i>
            <span className="text nav-text">Wallets</span>
          </NavLink>
        </li>
      </ul>
     
    </div>
  );
}

export default Mysidebar;
