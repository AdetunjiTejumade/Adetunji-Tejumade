import React from 'react';
import {NavLink} from "react-router-dom"
function Footer() {
    return (
      <div className="footer">
        <div className="social-links text-center text-white">
          <NavLink to="https://twitter.com/Tejumade_">
            <i className="fa fa-twitter mr-8"></i>
          </NavLink>

          <NavLink to="https://www.linkedin.com/in/tejumade-adetunji">
            <i className="fa fa-linkedin mr-8"></i>
          </NavLink>

          <NavLink to="https://github.com/AdetunjiTejumade">
            <i className="fa fa-github"></i>
          </NavLink>
        </div>
      </div>
    );
}

export default Footer;