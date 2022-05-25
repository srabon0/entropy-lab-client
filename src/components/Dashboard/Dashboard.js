import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
        <label
          for="my-drawer-2"
          class=" mx-auto btn w-52 btn-xs btn-outline btn-accent text-white drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          Click to Expand
        </label>
        <h1 className="m-2 text-blue-500 text-2xl font-medium">
          Welcome to dashboard
        </h1>
        {/* <!-- Page content here --> */}

        <Outlet />
      </div>
      <div class="drawer-side">
        <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {user && (
            <>
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
          )}

          {/* <!-- Sidebar content here --> */}

          <li>
            <Link to="/dashboard/additem">Additem</Link>
          </li>
          <li>
            <Link to="/dashboard/manageorder">Manage Item</Link>
          </li>
          {
            admin && <li>
            <Link to="/dashboard/alluser">Manage User</Link>
          </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
