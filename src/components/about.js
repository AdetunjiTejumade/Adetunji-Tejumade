import React from "react";
import Header from "./header";
import Footer from "./footer";

function About() {
  return (
    <div className="bg-body">
      <Header />
      <div className="text-white text-center mt-16 px-6 max-w-xl m-auto">
        <h1 className="text-3xl text-yellow">
          HEY THERE, I'M TEJU- A WEB DEVELOPER
        </h1>
        <hr className="border-2 border-yellow-600 mt-3 mb-3 w-6 m-auto" />
        <div className="mt-12 text-white">
          <p>
            I started coding at the age of 13
            {/* TODO update about */}
          </p>
          <p>
            I was awarded a scholarship to study to full-stack development at
            openclassroms by Facebook due to my perfomance in the facebook
            developer circles training.
          </p>
          <p>
            I'm aLso in the phase one of the google africa developer
            scholarship.
          </p>
        </div>
      </div>
      <div className="mt-20">
          <Footer />
        </div>
    </div>
  );
}

export default About;