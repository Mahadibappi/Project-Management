import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-200 pl-2 ">
        <div className="p-4 ml-4 my-3 ">
          <h1 className="text-lg font-bold text-slate-500">My Projects</h1>
          <ul className="mt-4 text-slate-500 font-semibold">
            <Link to="/">
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                Dashboard
              </li>
            </Link>
            <Link to="/overview">
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link to="/task">
              <li className="py-2 hover:bg-gray-300 cursor-pointer">Tasks</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                {" "}
                Progress
              </li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">Setting</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 bg-gray-300">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
