import React from "react";
import "./Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-main">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988756716!2d-0.26640578112070873!3d51.528739804788714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1701948948220!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-4 mb-3">
              <div className="box-1">
                <div className="container-fluid">
                  <div className="row d-flex align-items-center justify-content-center mb-3">
                    <div className="col-2 text-end">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="col-6 text-start">
                      <h4>+33 6 77 54 17 62</h4>
                    </div>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center mb-3">
                    <div className="col-2 text-end">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="col-6 text-start">
                      <h4>info@iteek.com</h4>
                    </div>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center mb-3">
                    <div className="col-2 text-end">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="col-6 text-start">
                      <h4>118 Av. Victor Hugo, 93300 Aubervilliers, France.</h4>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <h2>Follow Us</h2>
                  </div>
                  <div className="row mt-2">
                    <div className="social-icon gap-2">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box-2 px-lg-5">
                <div className="container px-lg-5">
                  <div className="row text-start">
                    <h2>Get In Touch</h2>
                  </div>

                  <div className="row mt-3">
                    <div className="col-6">
                      <div className="mb-3 text-start">
                        <input
                          type="text"
                          className="form-control"
                          id="sadasdasd"
                          placeholder="Name*"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3 text-start">
                        <input
                          type="email"
                          className="form-control"
                          id="sadasdasd"
                          placeholder="Email*"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3 text-start">
                        <input
                          type="text"
                          className="form-control"
                          id="sadasdasd"
                          placeholder="Subject*"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3 text-start">
                        <textarea
                          type="text"
                          className="form-control"
                          id="sadasdasd"
                          placeholder="Subject*"
                          aria-describedby="emailHelp"
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col d-flex align-items-start">
                      <button className="btn btn-primary">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
