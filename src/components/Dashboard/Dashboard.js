import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user);
  if (loading||adminLoading) {
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
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className=" mx-auto btn w-52 btn-xs btn-outline btn-accent text-white drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {user  && (
            <>
              <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/paymentmethod">Payment Method</Link>
              </li>
            </>
          )}

          {
            admin ? "" : <>
             <li>
                <Link to="/dashboard/myorders">My orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
            </>
          }

          {/* <!-- Sidebar content here --> */}

          {
            admin && <>
            <li>
            <Link to="/dashboard/additem">Add A Product</Link>
          </li>
            <li>
            <Link to="/dashboard/manageitem">Manage Products</Link>
          </li>
          <li>
            <Link to="/dashboard/manageorder">Manage All Orders</Link>
          </li>
          
          <li>
            <Link to="/dashboard/alluser">Make Admin</Link>
          </li>
            </>
          }
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
