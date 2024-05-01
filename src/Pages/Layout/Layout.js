import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200">
        <div className="p-4">
          <h1 className="text-lg font-semibold">default</h1>
          <ul className="mt-4">
            <Link to="/dashboard">
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                Dashboard
              </li>
            </Link>
            <Link to="/overview">
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                Overview
              </li>
            </Link>
            <Link to="/task">
              <li className="py-2 hover:bg-gray-300 cursor-pointer">Task</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">Setting</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-white">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
