import React from 'react';

function Footer() {
    return (
      <div className="footer py-5">
        <div className="social-links text-center text-white">
          <a href="https://twitter.com/Tejumade_" className="hover:text-orange-500 mr-8 text-lg">
            <i className="fa fa-twitter"></i>
          </a>

          <a href="https://www.linkedin.com/in/tejumade-adetunji" className="hover:text-orange-500 mr-8 text-lg">
            <i className="fa fa-linkedin"></i>
          </a>

          <a href="https://github.com/AdetunjiTejumade"  className="hover:text-orange-500 text-lg">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    );
}

export default Footer;