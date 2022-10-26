import React from "react";
import {
  BiDownArrow,
  BiDownArrowAlt,
  BiDownArrowCircle,
  BiSortDown,
} from "react-icons/bi";
import { BsMenuDown } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="mx-auto max-w-4xl">
      {/* 1st question  */}
      <div className="collapse  card glass shadow-xl m-5">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          What is CORS ?? <BiDownArrow className="ml-5" />
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
            Full form of CORS is cross origin resource sharing. It is an
            HTTP-header based mechanism that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources. As an example, express
            server is running in 5000 port and CORS is installed. So a react app
            running in 3000 port can access the files from the node server.
          </p>
        </div>
      </div>

      {/* 2nd question */}
      <div className="collapse  card glass shadow-xl m-5">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          Why we use Firebase ?? Is there any other alternatives for
          authentication?? <BiDownArrow className="ml-5" />
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. Some alternatives are used for users authentication are Auth0,
            MongoDB, Passport, Okta etc.
          </p>
        </div>
      </div>

      {/* 3rd question */}
      <div className="collapse  card glass shadow-xl m-5">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          How private route works ?? <BiDownArrow className="ml-5" />
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. It work as a middle man.
          </p>
        </div>
      </div>

      {/* 4th question  */}
      <div className="collapse  card glass shadow-xl m-5">
        <input type="checkbox" />
        <div className="collapse-title text-left text-xl font-medium flex items-center w-full justify-between text-primary">
          What is Node js ?? How Node js works ?? <BiDownArrow className="ml-5" />
        </div>
        <div className="collapse-content bg-base-300">
          <p className="text-justify pt-5 text-accent-content">
            Node. js (Node) is an open source development platform for executing
            JavaScript code server-side. Node is useful for developing
            applications that require a persistent connection from the browser
            to the server and is often used for real-time applications such as
            chat, news feeds and web push notifications.Node.js can generate
            dynamic page content Node.js can create, open, read, write, delete,
            and close files on the server Node.js can collect form data Node.js
            can add, delete, modify data in your database
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
