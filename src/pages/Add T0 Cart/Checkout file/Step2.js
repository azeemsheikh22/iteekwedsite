import React, { useState } from 'react'
import './Step2.css'

import watch from '../../../assiets/img/dsfsdfsdfsdf.png'
import HEADPHONE from '../../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import AddtocartNav from '../AddtocartNav'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux'

const Step2 = () => {

  const [amount, setamount] = useState(1)
  const { cart, totalprice } = useSelector((state) => state.carts);


  const setdecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  }

  const setincrease = () => {
    setamount(amount + 1)
  }

  const navigate = useNavigate();

  return (
    <div className='step2-main'>
      <AddtocartNav />

      <div className='container-fluid ps-lg-5 ps-0'>
        <div className='row ps-lg-5'>
          <div className='col-lg-8 left-box'>
            <div className='container-fluid mt-5'>
              <div className='row text-start'>
                <h1><i className="fa-solid fa-arrow-left-long" onClick={() => navigate("/addtocart")}></i></h1>
              </div>
              <div className='row mt-2'>
                <div className='col'>
                  <div className='fields-box p-4'>
                    <div className='row text-start'>
                      <h1>Shipping address</h1>
                    </div>

                    <div className='row mt-4'>
                      <div className='col-6 mb-3'>
                        <TextField required id="outlined-basic" label="Name" variant="outlined" className="customTextField" />
                      </div>
                      <div className='col-6 mb-3'>
                        <TextField required id="outlined-basic" type='email' label="Email" variant="outlined" className="customTextField" />
                      </div>
                      <div className='col mb-3'>
                        <TextField required id="outlined-basic" type='number' label="Number" variant="outlined" className="customTextField" />
                      </div>

                      {/* <div className='col-6 mb-3'>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Age</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            required
                            className="customSelect"
                          // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div> */}
                      <div className='col-6 mb-3'>
                        <TextField required id="outlined-basic" label="Address" variant="outlined" className="customTextField" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className='col right-box'>
            <div className='container-fluid mt-5'>
              <div className='row text-start'>
                <h1>Your order</h1>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='summary-box px-3 py-4'>
                    <div className='container-fluid'>
                      {
                        cart.map((item, index) => {
                          return <div className='row g-2 mb-3' key={index}>
                            <div className='col-2 img-box'>
                              <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images[0]}`} className='img-fluid' alt=''></img>
                            </div>
                            <div className='col-7 text-start'>
                              <h4>{item.display_name}</h4>
                            </div>
                            <div className='col'>
                              <h3>€{item.sell_price}</h3>
                            </div>
                          </div>
                        })
                      }
                      
                      <div className='row line'>
                      </div>

                      <div className='row total-box mt-4'>
                        <div className='col text-start'>
                          <h5>Subtotal</h5>
                        </div>
                        <div className='col text-end'>
                          <h5>€{totalprice}</h5>

                        </div>
                      </div>

                      <div className='row line mt-3'>
                      </div>

                      <div className='row checkout-btn mt-4'>
                        <button className='btn btn-primary'>Order Now</button>
                      </div>

                      {/* <div className='row line mt-3'>
                      </div>

                      <div className='row checkout-btn mt-4'>
                        <button className='btn btn-primary'>Checkout</button>
                      </div>
                      <div className='row mt-1'>
                        <h6><i className="fa-solid fa-lock"></i> Secure payment</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2
