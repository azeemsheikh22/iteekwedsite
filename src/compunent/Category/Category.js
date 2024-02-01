import React, { useEffect, useState } from 'react'
import './Category.css'
// import airpods from '../../assiets/img/air_pods-removebg-preview.png'
// import watch from '../../assiets/img/watch.png'
// import phone from '../../assiets/img/iphones_-2-removebg-preview.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Category = () => {

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
                                                <h3>{categorydata[0] ? categorydata[0].name : ""}</h3>
                                            </div>

                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long" onClick={() => navgate(`/products/${categorydata[0] ? categorydata[0].urlName: ""}`)}></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[0] ? categorydata[0].image : ""}`} alt='' className='img-fluid'></img>
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
                                                <h3>{categorydata[1] ? categorydata[1].name : ""}</h3>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long" onClick={() => navgate("/products")}></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[1] ? categorydata[1].image : ""}`} alt='' className='img-fluid'></img>
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
                                                <h3>{categorydata[2] ? categorydata[2].name : ""}</h3>
                                            </div>

                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long" onClick={() => navgate("/products")}></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[2] ? categorydata[2].image : ""}`} alt='' className='img-fluid'></img>
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

export default Category
