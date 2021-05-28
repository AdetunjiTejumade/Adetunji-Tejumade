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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          atque, facere natus nemo doloremque quas. Accusamus iusto odio aperiam
          adipisci quasi sunt aliquam, eius quos aliquid reprehenderit, ut
          dignissimos harum!
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
            <p>
              In this project I acted as part of a small group of misfits
              hell-bent on making cool stuff.
            </p>
            <hr className="my-2" />
            <p>
              At the time I was still using BackboneJS for the client side
              routing, although the views were renderd directly in the Microsoft
              C# MVC's back-end. The client side javascript was entirely
              modularized with RequireJS, which is awesome for code maintainance
              and scalability. That was probably the biggest challange of the
              project as it has a huge number of different templates, to make
              everything run smoothly and cohesively was a huge win
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
export default MoveAndGroove;
