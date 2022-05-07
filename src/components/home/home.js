import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Mynav from "../Mynav/Mynav";
import Mysidebar from "../sidebar/mysidebar";
import "./home.scss";

function Home() {
  // ========================= // Start Data  \\=========================================
  // ========================= // End Data And Start Methods  \\=========================================
  // ========================= // End Methods And Start  Code Html  \\=========================================
  return (
    <div className="home">
      <Mynav />
      <Mysidebar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
