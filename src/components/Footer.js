import React from "react";
import { Link } from "react-router-dom";
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded z-50">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a target={"_blank"} href="https://www.linkedin.com/in/md-abu-saiem-aziz-chowdhury-9b7217247/">
            <AiFillLinkedin className="text-3xl"/>
          </a>
          <a target={"_blank"} href="https://www.facebook.com/sayem.azizchowdhury.3/">
            <AiFillFacebook className="text-3xl"/>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Wow Learning</p>
      </div>
    </footer>
  );
};

export default Footer;
