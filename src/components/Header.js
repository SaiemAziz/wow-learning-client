import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { AuthContext } from "../context/Auth";
import { ThemeContext } from "../App";

const Header = () => {
  let { user } = useContext(AuthContext);
  let {thm, setThm} = useContext(ThemeContext);
  
  return (
    <div className="navbar bg-base-300 shadow-xl sticky top-0 px-4 z-50 font-bold">
      <div className="navbar-start">
        <Link
          to="/"
          className="cursor-pointer normal-case font-extrabold text-transparent text-3xl italic bg-clip-text bg-gradient-to-r from-green-400 to-red-600"
        >
          WOW LEARNING
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLink className="my-auto mx-5" to="/courses">
            Subjects
          </NavLink>

          <button
            onClick={() => setThm(!thm)}
            data-theme={!thm ? "coffee" : "autumn"}
            className="rounded-full p-4"
          >
            {thm ? (
              <>
                <BsSun />
              </>
            ) : (
              <>
                <BsMoonFill />
              </>
            )}
          </button>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-outline btn-success">
            Log In
          </Link>
        ) : (
          <Link to="/" className="btn btn-error">
            Log Out
          </Link>
        )}
      </div>

      {/* drop down menu */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost md:hidden">
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
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-300 rounded-box w-52 z-50"
        >
          <li>
            <Link>Item 1</Link>
          </li>
          <li
            onClick={() => setThm(!thm)}
            data-theme={!thm ? "coffee" : "autumn"}
            className=""
          >
            {thm ? (
              <Link>
                <BsSun />
              </Link>
            ) : (
              <Link>
                <BsMoonFill />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="tooltip tooltip-bottom" data-tip="hello">
  <button className="btn">Hover me</button>
</div> */
}
