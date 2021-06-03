import React, { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="nav-sm ">
        <button className="text-white text-xl font-semibold" onClick={Toggle}>
          ☰
        </button>

        <div className={toggle ? "overlay w-full" : "overlay w-0"}>
          <button className="closebtn" onClick={Toggle}>
            &times;
          </button>
          <div className="overlay-content font-extrabold text-3xl">
            <Link to="" onClick={Toggle}>Home </Link>
            <Link to="/about" onClick={Toggle}>About</Link>
            <Link to="/projects" onClick={Toggle}>Projects</Link>
            <Link to="/contact" onClick={Toggle}>Contact</Link>
          </div>
        </div>
      </div>

      <div className="text-white font-normal nav-lg font-poppins">
        <Link to="" className="mr-5">
          HOME
        </Link>

        <Link to="/about" className="mr-5">
          ABOUT
        </Link>

        <Link to="/projects" className="mr-5">
          PROJECTS
        </Link>

        <Link to="/contact" className="mr-5">
          CONTACT
        </Link>
      </div>
    </>
  );
}
export default NavBar;
