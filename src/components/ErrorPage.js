import React from "react";
import {useRouteError, Link} from 'react-router-dom'

const ErrorPage = () => {

  let err = useRouteError()

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">{err.status || '404'}</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        {err.statusText || 'Page Not Found'}
      </div>
      <button className="mt-5">
        <Link to='/' className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none "><span
          className="absolute inset-0 transition-transform scale-110 bg-[#FF6A3D] translate-x-0 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-100"
        ></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <router-link to="/">Go Home</router-link>
          </span>
        </Link>
      </button>
    </main>
  );
};

export default ErrorPage;
