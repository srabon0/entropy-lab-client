import React from "react";
import { Link } from "react-router-dom";
import labjar from '../../assets/icons8-round-bottom-flask-48.png'
const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        
        <Link to='/' class="btn btn-ghost normal-case text-xl text-primary">
            <img src={labjar} alt="labjar" />
            EntropyLab</Link>
      </div>
      
      <div class="navbar-end">
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
      <div class="hidden lg:flex">
        <ul class="menu text-primary menu-horizontal p-0">
          <li>
            <Link to='/'>Home</Link>
          </li>
         
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
