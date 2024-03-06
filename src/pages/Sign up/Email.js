import React, { useState } from 'react'
import './style.css'
import Navbar from '../../compunent/Navbar'
import { NavLink } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import { allCountries } from '../../result'
import 'react-phone-input-2/lib/material.css'
import Registernav from './Registernav'
// import 'react-phone-input-2/lib/style.css'

const Email = () => {

  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [valid, setvalid] = useState("form-control")
  const [contact_no, setcontact_no] = useState()
  const [age, setage] = useState()
  const [no, setno] = useState()
  const [gender, setgender] = useState("")
  const [filtercity, setfiltercity] = useState([])
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState("")
  const [password, setpassword] = useState("")
  const [password2, setpassword2] = useState("")

  const handlecityfilter = (e) => {
    const value = e.target.value;
    setcountry(value)
    if (value === "Select country") {
      console.warn("hello")
      setfiltercity("")
    } else {
      const cites = allCountries.find(ctr => ctr.name === value).cities
      setfiltercity(cites)
    }
  }

  const next1 = () => {
    if (email) {
      setno(1)
      setvalid("form-control")
    } else {
      setvalid("form-control input2")
    }
  }

  const next2 = () => {
    if (name) {
      setno(2)
      setvalid("form-control")
    } else {
      setvalid("form-control input2")
    }
  }

  const next3 = () => {
    if (contact_no) {
      setno(3)
      setvalid("form-control")
    } else {
      setvalid("form-control input2")
    }
  }

  const next4 = () => {
    if (age) {
      setno(4)
      setvalid("form-control")
    } else {
      setvalid("form-control input2")
    }
  }
  const next5 = () => {
    if (gender) {
      if (gender === "Select gender") {
        setvalid("form-control input2")
      } else {
        setno(5)
        setvalid("form-control")
      }
    } else {
      setvalid("form-control input2")
    }
  }

  const next6 = () => {
    // console.warn(country,city)
    if (country === "Select country") {
      setvalid("form-control input2")
    } else {
      if (country && city) {
        setno(6)
        setvalid("form-control")
        console.warn(country, city)
      } else {
        setvalid("form-control input2")
      }
    }

  }

  const next7 = () => {
    if (address) {
      setno(7)
      setvalid("form-control")
    } else {
      setvalid("form-control input2")
    }
  }

  const next8 = () => {
    // console.warn(country,city)
    if (password && password2) {
      // setno(6)
      setvalid("form-control")
      console.warn(password, password2)
    } else {
      setvalid("form-control input2")
    }

  }

  return (

    <div>
      <Registernav />
      <div className='register-mains '>
        <div className="container">
          {
            no === 1 ?
              <>
                <div className='row text-start mb-4'>
                  <h5 onClick={() => setno(0)}><i class="fa-solid fa-arrow-left"></i> Back</h5>
                </div>
                <div className='row'>
                  <div className='col-lg-3'></div>
                  <div className='col px-lg-5'>
                    <div className="row">
                      <h2>Create your username</h2>
                    </div>
                    <div className='row mt-4 text-start input-form'>
                      <div className="">
                        <label for="sadasd" className="form-label">Enter your username</label>
                        <input type="email" className={valid} value={name} onChange={(e) => setname(e.target.value)} id="sadasd" aria-describedby="emailHelp" />
                        {
                          valid === "form-control input2" ? <>
                            <div className='mt-2'><p>Please fill input</p></div>
                          </> : ""
                        }
                      </div>
                    </div>

                    <div className='row mt-3 px-lg-3'>
                      <button className='btn btn-primary' onClick={next2}>Next</button>
                    </div>
                  </div>
                  <div className='col-lg-3'></div>

                </div>
              </> : no === 2 ?
                <>
                  <div className='row text-start mb-4'>
                    <h5 onClick={() => setno(1)}><i class="fa-solid fa-arrow-left"></i> Back</h5>
                  </div>
                  <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col px-lg-5'>
                      <div className="row">
                        <h2>Enter your phone number</h2>
                      </div>
                      <div className='row mt-4 input-form'>
                        <div className='col-2'></div>
                        <div className='col'>
                        <PhoneInput
                          country={'us'}
                          value={contact_no}
                          onChange={(value) => setcontact_no(value)}
                        // style={{border: "none"}}
                        />
                        {
                          valid === "form-control input2" ? <>
                            <div className='mt-2'><p>Please fill input</p></div>
                          </> : ""
                        }
                        </div>

                      </div>

                      <div className='row mt-3 px-lg-3'>
                        <button className='btn btn-primary' onClick={next3}>Next</button>
                      </div>
                    </div>
                    <div className='col-lg-3'></div>

                  </div>
                </> : no === 3 ?
                  <>
                    <div className='row text-start mb-4'>
                      <h5 onClick={() => setno(2)}><i class="fa-solid fa-arrow-left"></i> Back</h5>
                    </div>
                    <div className='row'>
                      <div className='col-lg-3'></div>
                      <div className='col px-lg-5'>
                        <div className="row">
                          <h2>Enter your age</h2>
                        </div>
                        <div className='row mt-4 text-start input-form '>
                          <div className="mx-auto">
                            <label for="sadasd" className="form-label">Enter your age</label>
                            <input type="number" className={valid} value={age} onChange={(e) => setage(e.target.value)} id="sadasd" aria-describedby="emailHelp" />
                            {
                              valid === "form-control input2" ? <>
                                <div className='mt-2'><p>Please fill input</p></div>
                              </> : ""
                            }
                          </div>
                        </div>

                        <div className='row mt-3 px-lg-3'>
                          <button className='btn btn-primary' onClick={next4}>Next</button>
                        </div>
                      </div>
                      <div className='col-lg-3'></div>

                    </div>
                  </> : no === 4 ?
                    <>
                      <div className='row text-start mb-4'>
                        <h5 onClick={() => setno(3)}><i class="fa-solid fa-arrow-left"></i> Back</h5>
                      </div>
                      <div className='row'>
                        <div className='col-lg-3'></div>
                        <div className='col px-lg-5'>
                          <div className="row">
                            <h2>Select your gender</h2>
                          </div>
                          <div className='row mt-4 text-start input-form '>
                            <div className="mx-auto">
                              <label for="sadasd" className="form-label">Gender</label>
                              <select class="form-select" value={gender} onChange={(e) => setgender(e.target.value)} aria-label="Default select example">
                                <option selected>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                              {
                                valid === "form-control input2" ? <>
                                  <div className='mt-2'><p>Please fill input</p></div>
                                </> : ""
                              }
                            </div>
                          </div>

                          <div className='row mt-3 px-lg-3'>
                            <button className='btn btn-primary' onClick={next5}>Next</button>
                          </div>
                        </div>
                        <div className='col-lg-3'></div>

                      </div>
                    </> :
                          <>
                            <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col px-lg-5'>
                                <div className="row">
                                  <h2>Create your iteek account</h2>
                                </div>
                                <div className="row mt-2">
                                  <h3>Already have an account? <NavLink to="/login">Log in</NavLink></h3>
                                </div>

                                <div className='row mt-4 text-start input-form'>
                                  <div className="">
                                    <label for="sadasd" className="form-label">First, enter your email address</label>
                                    <input type="email" className={valid} value={email} onChange={(e) => setemail(e.target.value)} id="sadasd" aria-describedby="emailHelp" />
                                    {
                                      valid === "form-control input2" ? <>
                                        <div className='mt-2'><p>Please fill input</p></div>
                                      </> : ""
                                    }
                                  </div>
                                </div>

                                <div className='row mt-3 px-lg-3'>
                                  <button className='btn btn-primary' onClick={next1}>Following</button>
                                </div>
                              </div>
                              <div className='col-lg-3'></div>

                            </div>
                          </>
          }

        </div>
      </div>
    </div>
  )
}

export default Email
