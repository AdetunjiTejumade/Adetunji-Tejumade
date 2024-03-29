import React from "react";

import { Link } from "react-router-dom";
import Particles from "./particle_bg";
import ".././bg-anime.scss"

function Home() {
  return (
    <div className="overflow-hidden">
      <div className="text-center flex justify-center items-center h-screen w-full px-6 absolute">
        <div className="text-yellow-600">
          <h1 className="text-4xl">
            HEY, I'M{" "}
            <span className="text-white font-semibold">
              {" "}
              ADETUNJI TEJUMADE <br /> I AM A WEB DEVELOPER
            </span>
          </h1>

          <div className="mt-6">
            <ul className="inline flex justify-center text-black font-medium uppercase">
              <li>
                <Link to="/about" className="bg-yellow-600 mr-3 px-5 py-2 shadow-2xl">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="bg-yellow-600 mr-3 px-5 py-2">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="bg-yellow-600 px-5 py-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Particles />
    </div>
  );
}

export default Home;
