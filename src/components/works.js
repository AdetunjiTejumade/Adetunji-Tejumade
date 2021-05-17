import React from "react";
import Header from "./header";

import item_1 from "../images/portfolio/img_01a.png";
import item_2 from "../images/portfolio/item_2.jpg";
import Footer from "./footer";

function Works() {
  return (
    <div >
      <Header></Header>
      <div className="">
      <div className="mt-16 px-6 m-auto max-w-xl">
        
          <h1 className="text-center text-3xl text-yellow">MY WORKS</h1>
          <div className="works mt-12 text-white font-normal">
            <div className="item shadow-xl">
              <div>
                <img src={item_1} alt="portfolio-item"></img>
              </div>
              <div className="description p-3">
                <p>
                  This is one of the project i worked on in the front-end mentor
                  challenge. Built using Tailwind css
                </p>
              </div>
            </div>
            <div className="item shadow-xl mt-6">
              <div>
                <img src={item_2} alt="portfolio-item"></img>
              </div>
              <div className="description p-3">
                <p>
                  This is a website for WATCH IT OUTSIDE BOSTON outdoor event,
                  it allows users to make reservations for the event
                </p>
              </div>
            </div>
            <div className="mt-12 text-center mb-12">
              <a href="https://github.com/AdetunjiTejumade">
                OTHER PROJECTS ON GITHUB
              </a>
            </div>
          </div>
        
      </div>
      <div className="mb-6">
        <Footer></Footer>
      </div>
      </div>
    </div>
  );
}

export default Works;
