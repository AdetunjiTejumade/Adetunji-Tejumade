import React from 'react';
import Header from './header'
import Footer from './footer'


function Contact() {
    return (
      <>
        <Header />
        <div className="m-auto max-w-xl">
          <div className="text-white text-center mt-16 px-6">
            <h1 className="text-3xl text-yellow">"LETS' GET IN TOUCH.</h1>

            <hr className="border-2 mt-3 mb-3 w-6 m-auto" />
            <a
              className="font-semibold"
              href="mailto:tejumadeadetunji@gmail.com"
            >
              tejumadeadetunji@gmail.com
            </a>
          </div>
          <div className="contact px-6 mt-16 text-center">
            <a
              className="font-bold text-2xl text-yellow block"
              href="https://www.linkedin.com/in/tejumade-adetunji"
              target="_blank" rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a
              className="font-bold text-2xl text-yellow m-12 block"
              href="https://github.com/AdetunjiTejumade"
              target="_blank" rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              className="font-bold text-2xl text-yellow m-12 block"
              href="https://twitter.com/Tejumade_"
              target="_blank" rel="noopener noreferrer"
            >
              TWITTER
            </a>
          </div>
        </div>
        <div className="mt-20">
          <Footer></Footer>
        </div>
      </>
    );
  }

export default Contact;