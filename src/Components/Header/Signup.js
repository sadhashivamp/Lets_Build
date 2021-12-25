import React from "react";
import "./Login_Signup.css";
import Signuplogo from "../../Assets/Signuplogo.jpg";

import { NavLink } from "react-router-dom";

const Builder = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <div
        style={{
          width: "70%",
          height: "600px",

          margin: "auto",
          boxShadow: "0px 1px 5px black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <form>
          <h5>
            <span>Signup</span>
          </h5>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPhone">Phone Number</label>
            <input
              type="phone"
              class="form-control"
              id="exampleInputPhone"
              placeholder="Phone Number"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <div style={{ display: "flex:1" }}>
            <NavLink to="/builder">
              <button type="button" class="btn btn-outline-success">
                Sibmit
              </button>
            </NavLink>

            <NavLink to="/user" className="login-image-link">
              Already have account
            </NavLink>
          </div>
        </form>
        <img style={{ width: "50%", height: "100%" }} src={Signuplogo} alt="" />
      </div>
    </div>
  );
};

export default Builder;
