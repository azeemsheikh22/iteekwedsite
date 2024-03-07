import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assiets/img/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";


const Navbar = () => {
  const navigate = useNavigate();

  const { totalQuantity } = useSelector((state) => state.carts);
  const token = localStorage.getItem("usertoken");
  // const [sticky, setsticky] = useState("navbar navbar-expand-lg bg-body-white");
  // const [sticky2, set2sticky] = useState("");

  const dispatch = useDispatch();

  // console.log("sub menu", data)

  const arry = [
    "Mobiles Accessories",
    "Repair",
    "Tempered Glass",
    "Computer",
    "Computer Accessories",
    "Batterie",
    "Sim",
    "Electronics Accessories",
    "Audio",
  ];

  const [value, setValue] = useState(0);
  const [data, setdata] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/list/all")
      .then((res) => {
        // console.warn("sub menu", res.data);
        setdata(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  // Add scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className="nav-main">
      <div className={`app ${visible ? "sticky" : ""}`}>
        <div className="nav-first">
          <nav className="navbar navbar-expand-lg bg-white px-lg-5 px-0 px-md-0">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" className="my-2"></img>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <img src={logo} alt="" className="my-2"></img>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end align-items-center gap-lg-3 flex-grow-1 pe-3 ">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Help
                      </a>
                    </li>
                  </ul>
                  <form
                    className="d-flex mt-lg-0 mt-3 search-button"
                    role="search"
                  >
                    <input
                      className="form-control me-2 search-input"
                      // style={{ width: "400px", border: "1px solid black" }}
                      type="search"
                      placeholder="What are you looking for?"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success">
                      Search{" "}
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </button>
                  </form>

                  <ul className="navbar-nav justify-content-end align-items-center mt-3 mt-lg-0 gap-lg- ms-lg-5 pe-3 ">
                    <li className="nav-item">
                      <div className="dropdown">
                        <i
                          className="fa-regular fa-circle-user nav-link "
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul className="dropdown-menu">
                          {token ? (
                            <>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  onClick={() => {
                                    localStorage.clear();
                                  }}
                                >
                                  Logout
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Profile
                                </a>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <NavLink className="dropdown-item" to="/login">
                                  Login
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item"
                                  to="/register"
                                >
                                  Register
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item d-flex justify-content-center">
                      <i
                        className="fa-solid fa-cart-shopping nav-link cart-icon"
                        onClick={() => navigate("/addtocart")}
                      ></i>
                      <span className="cart-counter">{totalQuantity}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="category-nav">
          {data.length >= 1 ? (
            <>
              <div className="container">
                <div className="col-lg-2 mt-2">
                  <nav className="navbar">
                    <ul className="navbar-menu">
                      <li className="navbar-item dropdown">
                        <h4
                          style={{ fontWeight: "bold" }}
                          className="dropdown-toggle"
                          data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                        >
                          All items
                        </h4>
                        <div className="dropdown-3">
                          <ul className="dropdown-menu">
                            {data.map((item, index) => {
                              return (
                                <li className="dropdown-item-2" key={index}>
                                  <div className="arror-icon">
                                    <a href="#" className="dropdown-link">
                                      {item.name}
                                    </a>
                                    <i className="fa-solid fa-angle-right"></i>
                                  </div>
                                  <ul className="submenu">
                                    {item.filtered_sub_categories.map(
                                      (i, index) => {
                                        return (
                                          <li
                                            className="submenu-item"
                                            key={index}
                                          >
                                            <div className="arror-icon">
                                              <a
                                                href="#"
                                                className="submenu-link"
                                              >
                                                {item.name}
                                              </a>
                                              {/* <i className="fa-solid fa-angle-right"></i> */}
                                            </div>
                                            {/* <ul className="submenu2">
                                              {i.filtered_sub_sub_categories.map(
                                                (d, index) => {
                                                  return (
                                                    <li
                                                      className="submenu-item3"
                                                      key={index}
                                                    >
                                                      <a
                                                        href="#"
                                                        className="submenu-link3"
                                                      >
                                                        {d.name}
                                                      </a>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul> */}
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="col-lg-10 d-flex gap-4 mt-2"
                  style={{ overflow: "hidden" }}
                >
                  {data.map((item,index) => {
                    return <h4 key={index}>{item.name}</h4>;
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/* <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          Link with href
        </a> */}
      
        <div className="offcanvas offcanvas-start side-menu1" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <h3>Mobile</h3>
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

export default Navbar;
