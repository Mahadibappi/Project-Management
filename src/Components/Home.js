import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
