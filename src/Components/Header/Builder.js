import React from "react";
import "./Login_Signup.css";
import Loginlogo from "../../Assets/Loginlogo.jpg";

import { NavLink } from "react-router-dom";

const Builder = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <div className="form_container">
        <form>
          <h5>
            <span>Signin</span>for Builder
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
          <div style={{ paddingTop: 20 }}>
            <NavLink to="/buildernavbar">
              <button type="button" class="btn btn-outline-success">
                Signin
              </button>
            </NavLink>

            <NavLink to="/signup" className="login-image-link">
              Create an account
            </NavLink>
          </div>
        </form>
        <img style={{ width: "50%", height: "100%" }} src={Loginlogo} alt="" />
      </div>
    </div>
  );
};

export default Builder;
