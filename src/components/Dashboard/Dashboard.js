import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <h1 className="text-blue-500 text-4xl font-medium">
          Welcome to dashboard
        </h1>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          
          <li>
            <Link to="/dashboard">Additem</Link>
          </li>
          <li>
            <Link to="/dashboard/manageitem">Manage Item</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
