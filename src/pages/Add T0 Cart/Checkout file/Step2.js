import React, { useState } from "react";
import "./Step2.css";

import AddtocartNav from "../AddtocartNav";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const Step2 = () => {
  const { cart, totalprice } = useSelector((state) => state.carts);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [contact_no, setcontact_no] = useState();
  const navigate = useNavigate();

  const products = [
    cart.map((i, index) => {
      return {
        _id: i._id,
        qty: i.qty
      }
    })
  ];

  const total_amount = parseFloat(totalprice);

  const ordersubmit = () => {
    if (email,name,address,contact_no) {
      axios
        .post("https://iteekapi.doctorsforhealth.co.uk/api/v1/orders", {
          name,
          email,
          address,
          contact_no,
          guest: false,
          products: products[0],
          total_amount
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "Order has been placed successfully") {
            Swal.fire({
              title: "Thank you",
              text: "Order has been placed successfully",
              icon: "success"
            });
          } else {
           
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill input",
    });
    }
  };

  return (
    <div className="step2-main">
      <AddtocartNav />

      <div className="container-fluid ps-lg-5 ps-0">
        <div className="row ps-lg-5">
          <div className="col-lg-8 left-box">
            <div className="container-fluid mt-5">
              <div className="row text-start">
                <h1>
                  <i
                    className="fa-solid fa-arrow-left-long"
                    onClick={() => navigate("/addtocart")}
                  ></i>
                </h1>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <div className="fields-box p-4">
                    <div className="row text-start">
                      <h1>Shipping address</h1>
                    </div>

                    <div className="row mt-4">
                      <div className="col-6 mb-3 text-start">
                        <label for="exampleInputEmail1" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>

                      <div className="col-6 mb-3 text-start">
                        <label for="exampleInputEmail1" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                      <div className="col-6 mb-3 text-start">
                        <label for="exampleInputEmail1" className="form-label">
                          Phone number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          value={contact_no}
                          onChange={(e) => setcontact_no(e.target.value)}
                        />
                      </div>
                      <div className="col-6 mb-3 text-start">
                        <label for="exampleInputEmail1" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          value={address}
                          onChange={(e) => setaddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col right-box">
            <div className="container-fluid mt-5">
              <div className="row text-start">
                <h1>Your order</h1>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className="summary-box px-3 py-4">
                    <div className="container-fluid">
                      {cart.map((item, index) => {
                        return (
                          <div className="row g-2 mb-3" key={index}>
                            <div className="col-2 img-box">
                              <img
                                src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images[0]}`}
                                className="img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div className="col-7 text-start">
                              <h4>{item.display_name}</h4>
                            </div>
                            <div className="col">
                              <h3>€{item.price2}</h3>
                            </div>
                          </div>
                        );
                      })}

                      <div className="row line"></div>

                      <div className="row total-box mt-4">
                        <div className="col text-start">
                          <h5>Subtotal</h5>
                        </div>
                        <div className="col text-end">
                          <h5>€{totalprice}</h5>
                        </div>
                      </div>

                      <div className="row line mt-3"></div>

                      <div className="row checkout-btn mt-4">
                        <button className="btn btn-primary" onClick={ordersubmit}>Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
