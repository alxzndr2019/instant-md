import React, { Component } from "react";
import "./Navbar.css";
import { NavLink, HashRouter } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            {/*Logo*/}
            <NavLink id="logo" to="/">
              InstantMD
            </NavLink>

            {/* The Links*/}
            <ul>
              <li>
                <b>About</b>
              </li>
              <li>
                <b>Blog</b>
              </li>
              <li>
                <NavLink to="/Adddrug">
                  <b>Add Drug</b>
                </NavLink>
                >
              </li>
            </ul>
          </nav>
        </div>
      </HashRouter>
    );
  }
}
export default Navbar;
