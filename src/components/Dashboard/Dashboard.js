import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
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
          {
            user && <>
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add Review</Link>
            </li>

            </>
          }

          {/* <!-- Sidebar content here --> */}

          <li>
            <Link to="/dashboard/additem">Additem</Link>
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
