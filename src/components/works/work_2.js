import React from "react";
import Header from "../header";
import Footer from "../footer";

import item_1 from "../../images/portfolio/img_01a.png";

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
          <img src={item_1} alt="portfolio-item" className="w-full" />
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
