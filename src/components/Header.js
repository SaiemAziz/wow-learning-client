import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { AuthContext } from "../context/Auth";
import { ThemeContext } from "../App";
import { toast } from 'react-toastify';
import {CgProfile} from 'react-icons/cg'
 


const Header = () => {
  let { user, setUser, logOut } = useContext(AuthContext);
  let { thm, setThm } = useContext(ThemeContext);

  // log out user
  let clickedLogout = () => {
      logOut()
      .then(res => {
        setUser(null)
        toast.success('Successfully Logged out')
      })
      .catch(() => {
        setUser(null)
        toast.success('Successfully Logged out')
      })
  }

  return (
    <div className="navbar bg-base-300 shadow-xl sticky top-0 px-4 py-4 z-50 font-bold">
      <div className="navbar-start">
        <NavLink
          to="/"
          className="cursor-pointer flex flex-col sm:flex-row items-center normal-case font-extrabold  text-3xl italic bg-clip-text bg-gradient-to-r from-green-600 to-violet-600"
        >
          <span className="bg-gradient-to-r from-green-600 to-violet-600 p-3 rounded-xl not-italic text-base-300 mx-2">WOW</span>
          <span className="text-transparent"> LEARNING</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLink className="my-auto mx-5" to="/courses">
            Subjects
          </NavLink>
          <NavLink className="my-auto mx-5" to="/blog">
            Blog
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
        {!user ? 
          <Link to="/login" className="btn btn-outline btn-success">
            Log In
          </Link>
           : 
          <div className="flex items-center">
            {
              user?.photoURL ? 
              <div className="tooltip tooltip-info tooltip-bottom" data-tip={user.displayName || 'No Name'}>
                <img className="w-[40px] h-[40px] rounded-full mx-5" src={user.photoURL} alt="" /> 
              </div> :
              <div className="tooltip tooltip-info tooltip-bottom" data-tip={user.displayName}>
                <CgProfile/>
              </div>
            }
            <Link to="/" onClick={clickedLogout} className="btn btn-error">
            Log Out
            </Link>
          </div>
        }
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
          className="menu menu-compact dropdown-content mt-6 p-0 shadow bg-base-300 rounded-box w-52 z-50 text-left"
        >
            <NavLink className='p-3' to='/courses'>Subjects</NavLink>
            <Link className='p-3' to='/courses'>Blog</Link>
          
          <li
            onClick={() => setThm(!thm)}
            data-theme={!thm ? "coffee" : "autumn"}
            className="m-3 mt-0"
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
