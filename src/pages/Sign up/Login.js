
import React, { useEffect, useState } from 'react'
import './Register.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'


const Login = () => {

    
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const token = localStorage.getItem("usertoken")
    const navgate = useNavigate()

    useEffect(() => {
        if(token){
            navgate("/")
        }else{
            
        }
    },[])

    const handlesubmit = () => {
        if (email && password ) {
                axios.post("https://iteekapi.doctorsforhealth.co.uk/api/v1/customers/login", { email, password, }).then((res) => {
                    console.log(res)
                    if (res.data.status === "success") {
                        Swal.fire({
                            title: "Thank you!",
                            text: "You login successfully!",
                            icon: "success"
                        });
                        localStorage.setItem("usertoken",res.data.token)
                        localStorage.setItem("userid",res.data.user)
                        setTimeout(function () {
                            navgate("/")
                          }, 2000);
                    } else {
                        console.log(res.data)
                    }
                }).catch((e) => {
                    if (e.response.data === "Account does not exists") {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Account does not exists!",
                        });
                    }else if (e.response.data === "Password incorrect") {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Password incorrect!",
                        });
                    } else {
                        console.log(e)

                    }
                })
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill input!",
            });
        }
    }


  return (
    <div>
            <Navbar />
            <div className='register-main'>

                <div className='top-header mt-5'>
                    <NavLink to="/register" style={{ textDecoration: "none", color: "#5B5858", fontWeight: "500" }}>REGISTER</NavLink>
                    <a className='mx-2'>/</a>
                    <a>LOGIN</a>
                </div>

                <div className='container my-5 pt-lg-3'>
                    <div className='row '>
                        <h2>LOGIN</h2>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-2'></div>
                        <div className='col px-4'>
                            <div className='form-box p-5 p-3'>
                                <div className='row'>
                              
                                    <div className='col-12'>
                                        <div className="mb-4">
                                            <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)}  autoComplete='off' autoCorrect='off'/>

                                        </div>
                                    </div>
                                    
                                    <div className='col-12'>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />

                                        </div>
                                    </div>
        

                                    <div className='col-lg-6 d-flex align-items-start mt-2'>
                                        <button className='btn btn-primary' onClick={handlesubmit}>LOGIN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'></div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>

  )
}

export default Login
