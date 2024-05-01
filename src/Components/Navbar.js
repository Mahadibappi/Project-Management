/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-6 w-10/12">
      <div className="flex-1">
        <h3 className="text-3xl font-semibold">Project Management</h3>
      </div>
      <div className="flex-none gap-6 ">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <Link to="/login">
          <button className="btn bg-blue-700">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
