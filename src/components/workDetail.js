import React from "react";
import Header from "./header";
import Footer from "./footer";

import item_1 from "../images/portfolio/img_01a.png";

function WorkDetail() {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-gray-200 font-bold text-3xl py-3">
          Helping hands volunteering platform
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          atque, facere natus nemo doloremque quas. Accusamus iusto odio aperiam
          adipisci quasi sunt aliquam, eius quos aliquid reprehenderit, ut
          dignissimos harum!
        </p>
        {/* uppercase my-6 bg-orange-500 */}
        <button className="">
          View the website
        </button>
        {/* TODO use awesome silider for the images */}
        <div className="mb-6">
          <img src={item_1} alt="portfolio-item" className="w-full" />
        </div>
        <section className="">
          <h1 className="capitalize text-3xl font-bold text-gray-200 my-3">
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
          <h1 className="capitalize text-3xl font-bold text-gray-200 my-3">
            Technologies{" "}
          </h1>

          <div className="text-gray-400">
            <p>
              Code technologies and skills I got involved while working on this
              project
            </p>
            <hr className="my-2" />
            <ul>
              <li className="list-disc">Ruby on Rails</li>
              <li className="list-disc">React</li>
              <li className="list-disc">Html</li>
              <li className="list-disc">Css</li>
              <li className="list-disc">Heroku</li>
            </ul>
          </div>
        </section>

        <Footer />
      </div>
      {/* <Header></Header>
      <div className="px-24 pt-6 m-auto">
        <h1 className="text-orange-500 font-bold uppercase text-3xl py-3">
          Helping hands
        </h1>

        <div className="text-white mb-12 w-58">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            atque, facere natus nemo doloremque quas. Accusamus iusto odio
            aperiam adipisci quasi sunt aliquam, eius quos aliquid
            reprehenderit, ut dignissimos harum!
          </p>
          <div className="mt-6">
            <p className="font-bold text-orange-500">Stack</p>
            <ul className="mt-3">
              <li className=" mr-3">React</li>
              <li className=" mr-3">Ruby on Rails</li>
              <li className=" mr-3">Heroku</li>
              <li className=" mr-3">Git</li>
              <li className="">Leafletjs</li>
            </ul>
          </div>
          <p className="mt-3 text-orange-500">View Site</p>
        </div>

        <img src={item_1} alt="portfolio-item" className="w-full" />
      </div> */}
    </>
  );
}
export default WorkDetail;
