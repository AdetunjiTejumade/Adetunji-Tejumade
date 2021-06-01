import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Header from "../header";
import Footer from "../footer";

import img_02 from "../../images/img_02.png";
import img_02a from "../../images/img_02a.png";
import img_02b from "../../images/img_02b.png";
import img_02c from "../../images/img_02c.png";

function BoulderBikeTour() {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto pt-20 lato px-6">
        <h1 className="text-gray-200 font-bold text-3xl py-3 montserrat">
          Boulder Bike Tour
        </h1>
        <p className="text-gray-400">
          Built this demo app for a "client" to display different information
          and activities around a bike racing event.
        </p>
        {/* uppercase  */}
        <a href="https://boulder-bike-tour-app.herokuapp.com/" className="inline-block transition-all center text-orange-500 my-6 px-3 py-2 hover:bg-orange-500 hover:text-white font-bold">View the website</a>
        {/* TODO use awesome silider for the images */}
        <div className="mb-6">
        <Carousel dynamicHeight={false} showThumbs={false}>
            <div>
              <img src={img_02}  alt={"A screenshot of the project"} />
            </div>
            <div>
              <img src={img_02a} alt={"A screenshot of the project"} />
            </div>
            <div className="">
              <img src={img_02b} alt={"A screenshot of the project"} />
            </div>
            <div className="">
              <img src={img_02c} alt={"A screenshot of the project"}  />
            </div>
          </Carousel>
        </div>
        <section className="">
          <h1 className="capitalize text-3xl font-bold text-gray-200 my-3 montserrat">
            Techcnical bits{" "}
          </h1>

          <div className="text-gray-400">
            <p>
              The frontend uses react which allows me to manage different part
              of the site as reuseable components and i used tailwindcss for the
              styling, using tailwindcss allowed me to work faster. The contest
              page form is powered by a rails api which stores user entries in a database.
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
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>Html</li>
              <li>Css</li>
              <li>Heroku</li>
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
export default BoulderBikeTour;
