import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
          Helping hands volunteering platform
        </h1>
        <p className="text-gray-400">
         I built this app to help me track my actives, then it evolved into an exercise tracker allowing users to track their exercising activities.
        </p>
        {/* uppercase  */}
        <button className="text-orange-500 my-6 px-3 py-2 hover:bg-orange-500 hover:text-white font-bold">View the website</button>
        {/* TODO use awesome silider for the images */}
        <div className="mb-6">
        <Carousel dynamicHeight={false} showThumbs={false}>
            <div>
              <img src={img_03} />
            </div>
            <div>
              <img src={img_03a} />
            </div>
            <div className="">
              <img src={img_03b} className=""/>
            </div>
            <div className="">
              <img src={img_03c} className=""/>
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
             This is one of the first Rails site i made, it helped me grasp the basics of rails.The backend is a crud system which allows users to make changes to their records easily.
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
            <ul className="list-circle">
              <li>Ruby on Rails</li>
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
export default MoveAndGroove;
