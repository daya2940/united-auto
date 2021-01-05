import React from "react";

const Form = () => {
  return (
    <div className="mt-5 ml-lg-5">
      <div className="card form-width ">
        <div className="card-body" style={{ padding: "3.25rem" }}>
          <h5 className="card-title text-center">FIND A PART NOW</h5>
          <p className="card-text">
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <select class="form-control form-control-lg" required>
                  <option>Select Year</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control form-control-lg" required>
                  <option>Select Male/Model</option>
                  <option>Kia sonet</option>
                  <option>Honda i20</option>
                  <option>Lamboghini</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control form-control-lg" required>
                  <option>Select Engine assembly</option>
                  <option>Assembly line</option>
                  <option>On the road</option>
                </select>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button
                  type="submit"
                  class="btn btn-lg"
                  style={{
                    background: "#FFE715",
                    color: "black",
                    width: "192px",
                    height: "45px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
