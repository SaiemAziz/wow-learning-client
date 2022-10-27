import React, { useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ThemeContext } from "../App";
import Categories from "../components/Categories";

const Subjects = () => {
  let { thm } = useContext(ThemeContext);
  let subjects = useLoaderData();
  return (

    // course route 
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
      {/* left side bar  */}
      <div className={`${thm ? "bg-stone-800" : "bg-info-content"} md:col-span-2 lg:col-span-1`}>
        <div className={`md:sticky top-24 ${thm ? 'text-gray-300':'text-gray-300'}`}>
          <h1 className="text-3xl mt-10 font-bold border-b-4 rounded-full p-4 mx-6">Categories</h1>
            <Categories subjects={subjects}/>
        </div>
      </div>

      {/* right side bar  */}
      <div className="lg:col-span-2 md:col-span-3">
        <Outlet/>
      </div>
    </div>
  );
};

export default Subjects;
