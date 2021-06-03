import React from "react";
import Header from "./header";
import Footer from "./footer";

function About() {
  return (
    <div className="bg-body">
      <Header />
      <div className="text-white mt-16 px-6 max-w-xl m-auto">
        <h1 className="text-3xl text-yellow">
          HEY THERE, I'M TEJU- A WEB DEVELOPER
        </h1>
        <hr className="border-2 border-yellow-600 mt-3 mb-3 w-6 m-auto" />
        <div className="mt-12 text-white">
          <p>
            I am an introvert/extrovert(depends on who you ask) who loves trying
            new technologies and building cool stuff with them.
            {/* TODO update about */}
          </p>
          <p>
            My first experience with programming was when I was 13, I was
            fascinated with mobile games like{" "}
            <a
              href="https://en.wikipedia.org/wiki/Temple_Run"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Temple run
            </a>{" "}
            and I decided I wanted to build computer games. A family friend
            introduced me to the basics of python. But that didn't last.
          </p>
          <p>
            Years later, I decided to try learning Html and Css, which seem to
            click, then I started learning javascript. It felt really cool being
            able to create websites.
          </p>
          <p>
            Since then I have been improving my skills. I attended a boot camp
            after secondary school where I learnt Python and C#. And in 2020 i
            was awarded a scholarship to study to full-stack development at{" "}
            <a
              href="https://openclassrooms.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Openclassrooms
            </a>{" "}
            for 12 months by Facebook due to my performance in the facebook
            developer circles training.
          </p>
          <p>
            I'm currently seeking a role where I can grow and use my skills to
            help a company achieve their goals.
          </p>
          <p className="mb-0">I currently work with</p>
          <ul className="text-orange-500 font-bold mb-2">
            <li>Python</li>
            <li>Django</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <p>
            I'm open to meeting new people, you can connect with me via{" "}
            <a
              className="text-orange-500 hover:underline"
              href="https://www.linkedin.com/in/tejumade-adetunji"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a
              className="text-orange-500 hover:underline"
              href="mailto:tejumadeadetunji@gmail.com"
            >
              tejumadeadetunji@gmail.com
            </a>
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