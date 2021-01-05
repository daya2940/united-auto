import React from "react";
import logo from "../assets/logo.svg";
import phone from "../assets/phone.svg";

const Header = () => {
  return (
    <div className="header ">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navele"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                HOME<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                PRODUCT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                CONTACT US
              </a>
            </li>
          </ul>
          <img src={logo} alt="" height="96px" width="131px" />
          <button
            className="btn btn-lg"
            style={{
              background: "#161616",
              color: "white",
              width: "238px",
              height: "57px",
            }}
          >
            FIND A PART NOW
          </button>
          <div>
            <img src={phone} alt="" />
            +91 <span className="ml-2">9317202235</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
