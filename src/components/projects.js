import React from "react";
import { Link } from "react-router-dom";

import Header from "./header";

import item_1 from "../images/img_01.png";
import item_2 from "../images/img_03.png";
import item_3 from "../images/img_02.png";
import Footer from "./footer";

function Projects() {
  return (
    <div>
      <Header></Header>
      <div className="">
        <div className="mt-16 px-6 m-auto max-w-xl">
          <h1 className="text-center text-3xl text-yellow">MY PROJECTS</h1>
          <div className="works mt-12 text-white font-normal">
            <div className="item shadow-xl">
              <div>
                <h3 className="font-bold text-orange-500 uppercase py-2">
                  Helping Hands
                </h3>
              </div>
              <div>
                <img src={item_1} alt="portfolio-item"></img>
              </div>
              <div className="description p-3 flex justify-between">
                <Link
                  to="/helping_hands"
                  className="block font-bold text-orange-500"
                >
                  View Project {">"}
                </Link>
              </div>
            </div>

            <div className="item shadow-xl mt-6">
              <div>
                <h3 className="font-bold text-orange-500 uppercase py-2">
                  Watch it outside
                </h3>
              </div>
              <div>
                <img src={item_2} alt="portfolio-item"></img>
              </div>
              <div className="description p-3 flex justify-between">
                <Link
                  to="move_and_groove"
                  className="block font-bold text-orange-500"
                >
                  View Project {">"}
                </Link>
              </div>
            </div>

            <div className="item shadow-xl mt-6">
              <div>
                <h3 className="font-bold text-orange-500 uppercase py-2">
                  BOULDER BIKE TOUR
                </h3>
              </div>
              <div>
                <img src={item_3} alt="portfolio-item"></img>
              </div>
              <div className="description p-3 flex justify-between">
                <Link
                  to="boulder_bike_tour"
                  className="block font-bold text-orange-500"
                >
                  View Project {">"}
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center mb-12">
              <a
                href="https://github.com/AdetunjiTejumade"
                target="_blank"
                rel="noopener noreferrer"
              >
                OTHER PROJECTS ON GITHUB {">>"}
              </a>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Projects;
