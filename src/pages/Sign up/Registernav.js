import React from 'react'
import './Registernav.css'
import logo from '../../assiets/img/logo.png'
import { useNavigate } from 'react-router-dom'

const Registernav = () => {

    const navigate = useNavigate();

    return (
        <div className='reg-nav ps-2'>
            <div className='container'>
               <div className='row'>
               <div className='col d-flex justify-content-start'>
                    <img src={logo} alt='logo' className='img-fluid'></img>
                </div>
                <div className='col d-flex justify-content-end align-items-center'>
                <i className="fa-solid fa-xmark"  onClick={() => navigate("/")}></i>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Registernav
