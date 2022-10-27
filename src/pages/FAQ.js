import React from 'react';
import {
    BiDownArrow,
    BiDownArrowAlt,
    BiDownArrowCircle,
    BiSortDown,
  } from "react-icons/bi";

const FAQ = () => {
    return (
        <div className='flex justify-center items-center flex-col my-10'>
         <h1 className='text-4xl text-info font-bold italic mb-5'>Frequently Asked Questions</h1>   
         <div className="mx-auto max-w-4xl">
      {/* 1st question  */}
      <div className="collapse collapse-open">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          1. Do we have live classes ??
        </div>
        <div className="collapse-content  bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
           Ans: No we upload recorded videos at a certain time daily.
          </p>
        </div>
      </div>

      {/* 2nd question */}
      <div className="collapse collapse-open">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
         2. Do we have tests ??
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
           Ans: Yes, we take tests per week.
          </p>
        </div>
      </div>

      {/* 3rd question */}
      <div className="collapse collapse-open">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          3. What to do if students get problems ??
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
           Ans: You can call or give messages to teachers by facebook. 
          </p>
        </div>
      </div>

      {/* 4th question  */}
      <div className="collapse collapse-open">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          4. How does the syllebus oriented ??
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
            Ans: We actually follow the general syllebus most of the reknowned school follows.
          </p>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default FAQ;