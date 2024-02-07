import React, { useEffect, useState } from 'react'
import './Register.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import { NavLink } from 'react-router-dom'
import { allCountries } from '../../result'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const token = localStorage.getItem("usertoken")

    useEffect(() => {
        if(token){
            navgate("/")
        }else{
            
        }
    },[])

    const [filtercity, setfiltercity] = useState([])
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState()
    const [country, setcountry] = useState("")
    const [city, setcity] = useState("")
    const [contact_no, setcontact_no] = useState()
    const [address, setaddress] = useState("")
    const [password, setpassword] = useState("")
    const [password2, setpassword2] = useState("")
    const navgate = useNavigate()

    const handlecityfilter = (e) => {
        const value = e.target.value;
        setcountry(value)
        if (value === "Select Country") {
            console.warn("hello")
            setfiltercity("")
        } else {
            const cites = allCountries.find(ctr => ctr.name === value).cities
            setfiltercity(cites)
        }
    }

    const handlesubmit = () => {
        // console.warn(email,password,password2,name,age,contact_no,country,city,gender,address);

        if (email && password && password2 && name && age && contact_no && country && city && gender && address) {
            if (password === password2) {
                axios.post("https://iteekapi.doctorsforhealth.co.uk/api/v1/customers/register", { email, password, password2, name, age, contact_no, country, city, gender, address }).then((res) => {
                    console.log(res)
                    if (res.data.status === "success") {
                        Swal.fire({
                            title: "Thank you!",
                            text: "You register successfully!",
                            icon: "success"
                        });
                        setTimeout(function () {
                            navgate("/login")
                          }, 3000);
                    } else {
                        console.log(res.data)

                    }
                }).catch((e) => {
                    if (e.response.data === "Account already exists") {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Account already exists!",
                        });
                    } else {
                        console.log(e)

                    }
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password not match!",
                });
            }
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
                    <NavLink to="/login" style={{ textDecoration: "none", color: "#5B5858", fontWeight: "500" }}>LOGIN</NavLink>
                    <a className='mx-2'>/</a>
                    <a>REGISTER</a>
                </div>

                <div className='container my-5 pt-lg-3'>
                    <div className='row '>
                        <h2>Register</h2>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-2'></div>
                        <div className='col px-4'>
                            <div className='form-box p-lg-5 p-3'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='Username'
                                                value={name} onChange={(e) => setname(e.target.value)} />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='Phone' value={contact_no} onChange={(e) => setcontact_no(e.target.value)} />

                                        </div>
                                    </div>

                                    <div className='col-lg-6 mb-3'>
                                        <select className="form-select" aria-label="Default select example" value={gender} onChange={(e) => setgender(e.target.value)}>
                                            <option selected>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="number" className="form-control" placeholder='Age' value={age} onChange={(e) => setage(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mb-3'>
                                        <select className="form-select" aria-label="Default select example"
                                            onChange={handlecityfilter}>
                                            <option selected>Select Country</option>
                                            {
                                                allCountries.map((item) => {
                                                    return <option value={item.name} key={item._id}> {item.name} </option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-lg-6 mb-3'>
                                        <select className="form-select" aria-label="Default select example" value={city} onChange={(e) => setcity(e.target.value)}>
                                            <option selected>Select City</option>
                                            {filtercity.length >= 1 ?
                                                filtercity.map((item) => {
                                                    return <option value={item} key={item._id}>{item}</option>
                                                }) : ""
                                            }
                                        </select>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='Address' value={address} onChange={(e) => setaddress(e.target.value)} />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" placeholder='Confirm Password' value={password2} onChange={(e) => setpassword2(e.target.value)} />

                                        </div>
                                    </div>

                                    <div className='col-lg-6 d-flex align-items-start mt-2'>
                                        <button className='btn btn-primary' onClick={handlesubmit}>REGISTER</button>
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

export default Register
