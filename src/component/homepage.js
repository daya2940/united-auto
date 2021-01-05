import React from "react";
import Form from "../component/form";
import tel from "../assets/tel.svg";
import location from "../assets/location.svg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="homepage-description">
              <p className="title">WELCOME TO UNITED AUTO</p>
              <div className="ml-lg-5">
                <p className="subtitle">The Best OEM Used Part Seller</p>
              </div>
              <div className="homepageContacts ">
                <p>
                  <img src={tel} alt="" className="mr-2" />
                  <span style={{ color: "#FEFDF9", fontSize: "1.188rem" }}>
                    +91 <span className="ml-2">9317202235</span>
                  </span>
                </p>
                <p>
                  <img src={location} alt="" className="mr-2" />
                  <span style={{ color: "#FEFDF9", fontSize: "1.188rem" }}>
                    Marathahalli - Sarjapur Rd, John Nagar, Koramangala,
                    Bengaluru, Karnataka 560034
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="d-flex justify-content-end mb-5 mr-lg-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
