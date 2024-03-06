import React, { useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/material.css'
import Registernav from './Registernav'

const Login2 = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [valid, setvalid] = useState("form-control")

    const next1 = () => {
        if (email) {
            setvalid("form-control")
        } else {
            setvalid("form-control input2")
        }
    }


    return (

        <div>
            <Registernav />
            <div className='register-mains '>
                <div className="container">

                        <div className='row'>
                            <div className='col-lg-3'></div>
                            <div className='col px-lg-5'>
                                <div className="row">
                                    <h2>Welcome back</h2>
                                </div>
                                <div className="row mt-2">
                                    <h3>New to iteek? <NavLink to="/register">Register</NavLink></h3>
                                </div>

                                <div className='row mt-4 text-start input-form'>
                                    <div className="">
                                        <label for="sadasd" className="form-label">Your email address</label>
                                        <input type="email" className={valid} value={email} onChange={(e) => setemail(e.target.value)} id="sadasd" aria-describedby="emailHelp" />
                                        {/* {
                                            valid === "form-control input2" ? <>
                                                <div className='mt-2'><p>Please fill input</p></div>
                                            </> : ""
                                        } */}
                                    </div>
                                </div>

                                <div className='row mt-3 text-start input-form'>
                                    <div className="">
                                        <label for="sadasd" className="form-label">Your password</label>
                                        <input type="password" className={valid} value={password} onChange={(e) => setpassword(e.target.value)} id="sadasd" aria-describedby="emailHelp" />
                                        {
                                            valid === "form-control input2" ? <>
                                                <div className='mt-2'><p>Please fill input</p></div>
                                            </> : ""
                                        }
                                    </div>
                                </div>

                                <div className='row mt-3 px-lg-3'>
                                    <button className='btn btn-primary' onClick={next1}>Log in</button>
                                </div>
                            </div>
                            <div className='col-lg-3'></div>

                        </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Login2
