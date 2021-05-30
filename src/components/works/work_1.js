import React from "react";
import Header from "../header";
import Footer from "../footer";

import item_1 from "../../images/portfolio/img_01a.png";

function HelpingHands() {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto pt-20 lato px-6">
        <h1 className="text-gray-200 font-bold text-3xl py-3 montserrat">
          Helping hands volunteering platform
        </h1>
        <p className="text-gray-400">
          This app was built to connect the less privileged with other members
          of their society who are ready to help them.
        </p>
        {/* uppercase  */}
        <button className="text-orange-500 my-6 px-3 py-2 hover:bg-orange-500 hover:text-white font-bold">
          View the website
        </button>
        {/* TODO use awesome silider for the images */}
        <div className="mb-6">
          <img src={item_1} alt="portfolio-item" className="w-full" />
        </div>
        <section className="">
          <h1 className="capitalize text-3xl font-bold text-gray-200 my-3 montserrat">
            Techcnical bits{" "}
          </h1>

          <div className="text-gray-400">
            <p>
              In this project I acted as a full stack developer building the app
              alone .
            </p>
            <hr className="my-2" />
            <p>
              The client side javascript was made entirely with react.While the
              backend was writen in Ruby on Rails. I use{" "}
              <code>rails new aid-platform -d=postgresql --webpack=react</code>{" "}
              which generates a rails app with react complied.
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
export default HelpingHands;
