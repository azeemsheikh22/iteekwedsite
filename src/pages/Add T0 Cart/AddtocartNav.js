import React from 'react'
import './AddtocartNav.css'
import logo from '../../assiets/img/logo.png'
import { useNavigate } from 'react-router-dom'


const AddtocartNav = () => {

    const navigate = useNavigate();

  return (
    <div className='cart-nav ps-2'>
      <img src={logo} alt='logo' className='img-fluid' onClick={() => navigate("/")}></img>
    </div>
  )
}

export default AddtocartNav
