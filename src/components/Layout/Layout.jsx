import React from "react";
import styles from "./layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import profile from "../../assets/man_1.png";

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="dashboard">
        <div className="header">
          <div className="flex-grow-1">
            <img src={profile} alt="profile" />
            <span className="active"></span>
            <div className="d-flex flex-column">
              <h1>Ahmed Taha</h1>
              <span>Manager</span>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
