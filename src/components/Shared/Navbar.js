import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import labjar from "../../assets/icons8-round-bottom-flask-48.png";
import auth from "../../firebase.init";
import Loading from "./Loading";
import dummy from '../../assets/face-mask.png'



const Navbar = () => {

  
  
  const logout = () => {
    signOut(auth);
  };

  const [user, loading, error] = useAuthState(auth);
  
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
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <Link to="/" class="btn btn-ghost normal-case text-xl text-primary">
          <img src={labjar} alt="labjar" />
          EntropyLab
        </Link>
      </div>

      <div class="navbar-end">
        <div class="navbar navbar-end">
          <div class="hidden lg:flex">
            <ul class="menu text-primary menu-horizontal p-0">
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
            <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar mx-10">
              <div class="w-10 rounded-full">
                <img src={user.photoURL || dummy } />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/dashboard' class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </Link>
              </li>
              
              <li>
              {user && (
                <button
                  class="btn btn-ghost normal-case  text-primary"
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

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 text-primary shadow bg-base-100 rounded-box w-52"
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
