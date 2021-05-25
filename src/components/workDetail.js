import React from "react";
import Header from "./header";
import Footer from "./footer";

import item_1 from "../images/portfolio/img_01a.png";

function WorkDetail() {
  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto pt-20">
        <h1 className="text-yellow font-bold text-3xl py-3">
          Helping hands volunteering platform
        </h1>
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
