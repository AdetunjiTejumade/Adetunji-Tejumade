import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Header from "../header";
import Footer from "../footer";

import img_03 from "../../images/img_03.png";
import img_03a from "../../images/img_03a.png";
import img_03b from "../../images/img_03b.png";
import img_03c from "../../images/img_03c.png";

function MoveAndGroove() {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto pt-20 lato px-6">
        <h1 className="text-gray-200 font-bold text-3xl py-3 montserrat">
          Watch it outside
        </h1>
        <p className="text-gray-400">
          This is website for an outdoor film festival.
        </p>
        {/* uppercase  */}
        <a
          href="https://watch-it-outside.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-all center text-orange-500 my-6 px-3 py-2 hover:bg-orange-500 hover:text-white font-bold"
        >
          View the website
        </a>
        <div className="mb-6">
          <Carousel dynamicHeight={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} >
            <div>
              <img src={img_03} alt="A screenshot of the project" />
            </div>
            <div>
              <img src={img_03a} alt="A screenshot of the project" />
            </div>
            <div className="">
              <img src={img_03b} alt="A screenshot of the project" />
            </div>
            <div className="">
              <img src={img_03c} alt="A screenshot of the project" />
            </div>
          </Carousel>
        </div>
        <section className="">
          <h1 className="capitalize text-3xl font-bold text-gray-200 my-3 montserrat">
            Techcnical bits{" "}
          </h1>

          <div className="text-gray-400">
            {/* <p>
              In this project I acted as part of a small group of misfits
              hell-bent on making cool stuff.
            </p>
            <hr className="my-2" /> */}
            <p>
              On this project i used bootstrap utilities which i found more
              flexible and easier to use than than predefined components.
            </p>
          </div>
        </section>
        <section className="">
          <h1 className="capitalize text-3xl font-bold text-gray-200 my-3 montserrat">
            Technologies{" "}
          </h1>

          <div className="text-gray-400">
            <p>
              Code technologies and skills I got involved while working on this
              project
            </p>
            <hr className="my-2" />
            <ul className="list-circle px-5">
              <li>Html</li>
              <li>Css</li>
              <li>Bootstrap</li>
              <li>Netlify</li>
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
export default MoveAndGroove;
