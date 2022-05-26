import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import labjar from "../../assets/icons8-round-bottom-flask-48.png";
import auth from "../../firebase.init";
import Loading from "./Loading";
import dummy from '../../assets/face-mask.png'
import useCurrentUser from "../Hooks/useCurrentUser";



const Navbar = () => {

  
  
  const logout = () => {
    signOut(auth);
  };

  const [user, loading, error] = useAuthState(auth);
  const [internalUser] = useCurrentUser();
  
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error }</p>
      </div>
    );
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">
          <img src={labjar} alt="labjar" />
          EntropyLab
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu text-primary menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              {
                user&& <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              }
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              

              {!user && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {
            user &&<>
            <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar mx-10">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || internalUser?.img } />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/dashboard' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              
              <li>
              {user && (
                <button
                  className="btn btn-ghost normal-case  text-primary"
                  onClick={logout}
                >
                  Log out
                </button>
              )}
              </li>
            </ul>
          </div>
            </>
          }
        </div>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 text-primary shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
