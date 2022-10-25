import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Categories from "../components/Categories";

const Subjects = () => {
  let { thm } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className={thm ? "bg-base-content" : "bg-info-content"}>
        <div className={`sticky top-16 ${thm ? 'text-black':'text-white'}`}>
          <h1 className="text-3xl mt-10 font-bold border-b-4 rounded-full p-4 mx-6">All Categories</h1>
            <Categories/>
        </div>
      </div>
      <div>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
        <h1>dada</h1>
      </div>
    </div>
  );
};

export default Subjects;
