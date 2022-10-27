import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { HiDownload } from "react-icons/hi";

const SingleSubject = () => {
  let subject = useLoaderData();
  let ref = createRef();
  return (
    <div className="w-full p-5">
      <div className="flex my-5 mx-auto items-center">

        {/* title  */}
        <h1 className="text-4xl font-bold">Details of</h1>
        <ReactToPdf
          targetRef={ref}
          filename={`${subject.name}-details.pdf`}
          scale={1}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="text-3xl ml-3 btn btn-circle btn-outline btn-primary font-bold"
            >
              <HiDownload />
            </button>
          )}
        </ReactToPdf>

      {/* details card  */}
      </div>
      <div ref={ref} className="mx-auto">
        <div className="mt-5 card glass p-5  text-primary">
          <h1 className="italic text-6xl font-bold text-info mb-5">
            {subject.name}{" "}
          </h1>
          <img
            className="w-full lg:w-2/3 mx-auto rounded-2xl shadow-xl"
            src={subject.pic}
            alt=""
          />
          <p className="text-2xl my-5 text-left">
            Category: {subject.category.toUpperCase()}
          </p>
          <p className="text-2xl mt-5 text-left">Description:</p>
          <p className="text-justify mb-10">{subject.description}</p>

          <Link
            to={`/checkout/${subject._id}`}
            className="btn btn-info  text-xl font-bold"
          >
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSubject;
