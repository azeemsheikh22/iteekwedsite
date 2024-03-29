import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import watch from '../../assiets/img/smart watches png.png'
import air from '../../assiets/img/airpods.png'
import tab from '../../assiets/img/tablet-mockup.png'


const Category = (props) => {

    // const [categorydata, setcategorydata] = useState([]);
    // const [categoryfound, setcategoryfound] = useState(false)
    const navgate = useNavigate()
    // console.warn(props)

    const categorydata = props.categorydata;
    // if(categorydata.length === 0){
    //     setcategoryfound(true)
    // }else{
    //     setcategoryfound(false)

    // }

    // useEffect(() => {
    //     getdata();
    // }, []);

    // const getdata = () => {
    //     axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/enabled")
    //         .then((res) => {
    //             // setcategorydata(res.data)
    //             if (res.data.length >= 1) {
    //                 setcategoryfound(true)
    //             }
    //         }).catch((e) => {
    //             console.log(e)
    //         })
    // };

    return (
        <div className='Category-main py-4 py-lg-0'>
            <div className='container'>
                <div className='row '>
                    {
                        categorydata.length >= 1 ? <>
                            <div className='col-lg-4 col-sm-12 mb-3'>
                                <div className='category-cart'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col cart-text'>
                                                <div className='container'>
                                                    <div className='row'>
                                                        <h3>{categorydata[0] ? categorydata[0].name : ""}</h3>
                                                    </div>

                                                    {/* <div className='row'>
                                                        <h3>Watches</h3>
                                                    </div> */}

                                                    <div className='row mt-2'>
                                                        <div className='circle-box mx-auto'>
                                                            <i class="fa-solid fa-arrow-right-long" onClick={() => navgate("/products")}></i>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col' style={{ transform: "scale(1.1)" }}>
                                                <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[0] ? categorydata[0].image : ""}`} alt='' className='img-fluid' onClick={() => navgate("/products")}></img>
                                            </div>

                                            {/* <div className='col' style={{ transform: "scale(1.1)" }}>
                                                <img src={watch} alt='' className='imgluid' onClick={() => navgate("/products")}></img>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 mb-3'>
                                <div className='category-cart'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col cart-text'>
                                                <div className='container'>
                                                    {/* <div className='row'>
                                                        <h3>Airbuds</h3>
                                                    </div> */}
                                                    <div className='row'>
                                                        <h3>{categorydata[1] ? categorydata[1].name : ""}</h3>
                                                    </div>
                                                    <div className='row mt-2'>
                                                        <div className='circle-box mx-auto'>
                                                            <i class="fa-solid fa-arrow-right-long" onClick={() => navgate("/products")}></i>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col' style={{ overflow: "hidden" }}>
                                                <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[1] ? categorydata[1].image : ""}`} alt='' className='img-fluid' onClick={() => navgate("/products")}></img>
                                            </div>

                                            {/* <div className='col' style={{ overflow: "hidden" }}>
                                                <img src={air} alt='' className='imgluid' onClick={() => navgate("/products")}></img>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 mb-3'>
                                <div className='category-cart'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col cart-text'>
                                                <div className='container'>
                                                    <div className='row'>
                                                        <h3>{categorydata[2] ? categorydata[2].name : ""}</h3>
                                                    </div>

                                                    {/* <div className='row'>
                                                        <h3>Tablets</h3>
                                                    </div> */}

                                                    <div className='row mt-2'>
                                                        <div className='circle-box mx-auto'>
                                                            <i class="fa-solid fa-arrow-right-long" onClick={() => navgate("/products")}></i>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col' style={{ transform: "scale(1.1)" }}>
                                                <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/images/${categorydata[2] ? categorydata[2].image : ""}`} alt='' className='img-fluid' onClick={() => navgate("/products")}></img>
                                            </div>
                                            {/* <div className='col' style={{ transform: "scale(1.1)" }}>
                                                <img src={tab} alt='' className='imgluid' onClick={() => navgate("/products")}></img>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> : <>
                            <div className='col-lg-4'>
                                <Box sx={{ mt: -2 }}>
                                    <Skeleton width="100%" height="400px" />
                                </Box>
                            </div>
                            <div className='col-lg-4'>
                                <Box sx={{ mt: -2 }}>
                                    <Skeleton width="100%" height="400px" />
                                </Box>
                            </div>
                            <div className='col-lg-4 col-sm-12'>
                                <Box sx={{ mt: -2 }}>
                                    <Skeleton width="100%" height="400px" />
                                </Box>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Category
