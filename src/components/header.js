import React from "react";
import NavBar from "./navBar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="pt-6 px-6 pb-2 bg-nav md:px-20">
      <div className="header flex justify-between align-baseline">
        <Link to="/" className="text-xl text-yellow font-semibold logo">
          ADETUNJI TEJUMADE
        </Link>

        <NavBar />
      </div>
    </div>
  );
}

export default Header;
