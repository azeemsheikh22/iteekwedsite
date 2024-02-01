import React, { useEffect, useState } from 'react'
import './Category.css'
import airpods from '../../assiets/img/tv.png'
import headphone from '../../assiets/img/239032_0_ogo1io.png'
import phone from '../../assiets/img/353721_mobile-battery-png.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Category2 = () => {

    const [categorydata, setcategorydata] = useState([]);
    const navgate = useNavigate("")


    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/enabled")
            .then((res) => {
                console.warn(res.data)
                setcategorydata(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };

    return (
        <div className='Category-main py-4 py-lg-0'>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-4 col-sm-6 mb-3'>
                        <div className='category-cart'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-5 cart-text'>
                                        <div className='container'>
                                            <div className='row'>
                                                <h3>{categorydata[3] ? categorydata[3].name : ""}</h3>
                                            </div>

                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long" onClick={() => navgate(`/products/${categorydata[3] ? categorydata[3].urlName : ""}`)}></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[3] ? categorydata[3].image : ""}`} alt='' className='img-fluid'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 mb-3'>
                        <div className='category-cart'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-5 cart-text'>
                                        <div className='container'>
                                            <div className='row'>
                                                <h3>{categorydata[4] ? categorydata[4].name : ""}</h3>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long" onClick={() => navgate(`/products/${categorydata[4] ? categorydata[4].urlName : ""}`)}></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[4] ? categorydata[4].image : ""}`} alt='' className='img-fluid'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 mb-3'>
                        <div className='category-cart'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-5 cart-text'>
                                        <div className='container'>
                                            <div className='row'>
                                                <h3>{categorydata[5] ? categorydata[5].name : ""}</h3>
                                            </div>

                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long" onClick={() => navgate(`/products/${categorydata[5] ? categorydata[5].urlName : ""}`)}></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[5] ? categorydata[5].image : ""}`} alt='' className='img-fluid'></img>
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

export default Category2
