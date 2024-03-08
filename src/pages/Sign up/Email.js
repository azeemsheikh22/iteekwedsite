import React, { useState } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/material.css";
import Registernav from "./Registernav";

const Email = () => {
  const [email, setemail] = useState("");
  const [valid, setvalid] = useState("form-control");

  const navigate = useNavigate();

  const next1 = () => {
    if (email) {
      setvalid("form-control");
      navigate("/account-type")
    } else {
      setvalid("form-control input2");
    }
  };

  return (
    <div>
      <Registernav />
      <div className="register-mains ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col px-lg-5">
              <div className="row text-center">
                <h2>Create your iteek account</h2>
              </div>
              <div className="row mt-2 text-center">
                <h3>
                  Already have an account? <NavLink to="/login">Log in</NavLink>
                </h3>
              </div>

              <div className="row mt-4 text-start input-form">
                <div className="">
                  <label for="sadasd" className="form-label">
                    First, enter your email address
                  </label>
                  <input
                    type="email"
                    className={valid}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id="sadasd"
                    aria-describedby="emailHelp"
                  />
                  {valid === "form-control input2" ? (
                    <>
                      <div className="mt-2">
                        <p>Please fill input</p>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row mt-3 px-lg-3">
                <button className="btn btn-primary" onClick={next1}>
                  Following
                </button>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
