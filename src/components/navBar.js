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
            <Link to="">Home </Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>
            <Link to="/contact">Contact</Link>
            {/* TODO change font type */}
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

        <Link to="/works" className="mr-5">
          WORKS
        </Link>

        <Link to="/contact" className="mr-5">
          CONTACT
        </Link>
      </div>
    </>
  );
}
export default NavBar;
