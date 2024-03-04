import React, { useEffect, useState } from 'react'
import './detailpage.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import ipad2 from '../../assiets/img/ipad2.png'
import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import watch from '../../assiets/img/dsfsdfsdfsdf.png'
import tv from '../../assiets/img/tv.png'
import mac from '../../assiets/img/macbook.png'
import air_pods from '../../assiets/img/air_pods-removebg-preview.png'
import { Rating } from '@mui/material'
import delivery from '../../assiets/img/delivery_709790.png'
import welcomedesign from '../../assiets/img/welcome1.png'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch } from 'react-redux'
import { addtocart } from '../../features/Cartslice'

const Detailpage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        getdata();

    }, [])

    const arr = [HEADPHONE, ipad2, watch, tv, mac,]
    const arry = [air_pods, HEADPHONE, watch, mac, HEADPHONE, ipad2, tv, mac];
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState(2);
    const [imagefix, setimagefix] = useState("row");

    const [i, seti] = useState(0)

    const [products, setproducts] = useState([]);
    const [categorydata, setcategorydata] = useState([]);
    const [filterid, setfilterid] = useState(0)
    const [loader, setloader] = useState(false)
    const [categoryurl, setcategoryurl] = useState("")

    const getdata = () => {
        axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/byUrl/${params.id}`)
            .then((res) => {
                console.warn("singleproduct", res.data)
                if (res.data.length >= 1) {
                    setproducts(res.data)
                    setloader(true)
                    // setcategoryurl(res.data[0].category.urlName)

                    getdata2(res.data[0].category.urlName);

                }
            }).catch((e) => {
                if (e.message === "Network Error") {
                    console.log("Network Error")

                } else {
                    console.log("singleproduct", e)
                }
                // navgate("/")
            })
    };

    const getdata2 = (urlName) => {
        axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/category/${urlName}`)
            .then((res) => {
                const pageSize = 8;
                const page = 1;
                const pages = Math.ceil(res.data?.length / pageSize);
                const pageData = res.data?.slice((page * pageSize) - pageSize, page * pageSize);
                console.log("categorydata", pageData)
                setcategorydata(pageData)

            }).catch((e) => {
                // console.log(e)
            })
    }

    const [a, seta] = useState()

    const click = (e,url) => {
        seta(e)
        setTimeout(function () {
            navigate(`/product-detail/${url}`)
            window.location.reload();
        }, 500);
    }

    return (
        <div>
            <Navbar />
            <div className='detailpage-main pb-4 mt-lg-5'>
                <div className='container mb-5 pt-lg-4 py-lg-5'>
                    <div className='row'>
                        <div className='col-lg-6 img-box2 mb-5'>
                            {
                                loader ?
                                    <>
                                        <div className={imagefix}>
                                            <div className='col-2 d-flex align-items-center justify-content-center'>
                                                <div className='container'>
                                                    {
                                                        products[filterid]?.images.map((item, index) => {
                                                            return <div className='row ms-auto mb-2' key={index} onClick={() => seti(index)}>
                                                                <div className='img-box-1'>
                                                                    <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item}`} alt='' ></img>
                                                                </div>
                                                            </div>
                                                        })
                                                    }


                                                </div>
                                            </div>
                                            <div className='col-10'>
                                                <div className='img-box-2'>
                                                    <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${products[filterid] ? products[filterid].images[i] : ""}`} alt=''></img>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                    : <>
                                        <Box sx={{ mt: -12 }}>
                                            <Skeleton width="100%" height="600px" />
                                        </Box>

                                    </>
                            }

                        </div>

                        <div className='col-lg-6 content-main px-lg-4'>
                            <div className='row'>
                                {
                                    loader ? <>
                                        <div className='col-lg-9 col-sm-9 col-12  text-start'>
                                            <h1>{products[filterid] ? products[filterid].display_name : ""}</h1>
                                        </div>
                                        <div className='col-lg col-sm col-12 text-lg-end text-sm-end text-start'>
                                            <h2>€{products[filterid] ? products[filterid].sell_price : ""}</h2>
                                        </div>
                                    </> : <>
                                        <Box sx={{ mt: 1 }}>
                                            <Skeleton width="100%" height="100px" />
                                        </Box>
                                        <Box sx={{ mt: -2 }}>
                                            <Skeleton width="100%" height="100px" />
                                        </Box>
                                    </>
                                }
                            </div>

                            {
                                loader ? <>
                                    <div className='row mt-2 text-start pe-lg-5'>
                                        <p>It is a long established fact that a
                                            reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    </div>

                                    <div className='row mt-2'>
                                        <div className='col text-start'>
                                            <h4>Categories: {products[filterid] ? products[filterid].category.name : ""}</h4>
                                        </div>
                                    </div>

                                    <div className='row mt-1'>
                                        <div className='col d-flex align-items-center'>
                                            <Rating name="read-only" value={value} readOnly />
                                        </div>
                                        <div className='col d-flex align-items-center justify-content-end'>
                                            <button className='btn btn-primary add-btn' onClick={() => dispatch(addtocart(products[filterid]))}>Add to cart</button>
                                        </div>
                                    </div>
                                    <div className='row liness mt-3'></div>
                                    <div className='row delivery-row mt-3 '>
                                        <div className='col d-flex gap-3'>
                                            <img className='img-fluid' src={delivery} alt=''></img>
                                            <h3 className='pt-1'>Free delivery by 23 Feb - 26 Feb</h3>
                                        </div>
                                    </div>

                                    <div className='row liness mt-4'></div>

                                    {/* <div className='row mt-3 text-start'>
                                <h3>Condition</h3>
                            </div>

                            <div className='row boxs'>
                                <div className='col-4'>
                                    <button className='btn btn-primary active'>Fair<br /><span>€307.86</span></button>
                                </div>
                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal'>Good<br /><span>€307.86</span></button>
                                </div>
                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal'>Excellent<br /><span>€307.86</span></button>
                                </div>
                            </div> */}

                                    {
                                        products[0]?.attributes[0]?.name === "Colour" ? <>
                                            <div className='row mt-4 text-start'>
                                                <h3>{products[0]?.attributes[0]?.name}</h3>
                                            </div>

                                            <div className='row boxs'>
                                                {
                                                    products.map((item, index) => {
                                                        return <div className='col-4 mb-2' key={index} onClick={() => setfilterid(index)}>
                                                            <button className={index === filterid ? "btn btn-primary d-flex align-items-center justify-content-center py-2 active" : "btn btn-primary d-flex align-items-center justify-content-center py-2 button-normal"}><button style={{ background: item.attributes[0]?.option_index.option2 }} className='color-btn me-2'></button> {item.attributes[0]?.option_index.option}</button>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </> :products[0]?.attributes[0]? <>
                                            <div className='row mt-4 text-start'>
                                                <h3>{products[0]?.attributes[0]?.name}</h3>
                                            </div>

                                            <div className='row boxs'>
                                                {
                                                    products.map((item, index) => {
                                                        return <div className='col-4 mb-2' key={index} onClick={() => setfilterid(index)}>
                                                            <button className='btn btn-primary active d-flex align-items-center justify-content-center py-2 button-normal'>{item.attributes[0]?.option_index.option}</button>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </>:""
                                    }

                                    {
                                        products[0]?.attributes[1]?.name === "Colour" ? <>
                                            <div className='row mt-4 text-start'>
                                                <h3>{products[0]?.attributes[1]?.name}</h3>
                                            </div>

                                            <div className='row boxs'>
                                                {
                                                    products.map((item, index) => {
                                                        return <div className='col-4 mb-2' key={index} onClick={() => setfilterid(index)}>
                                                            <button className='btn btn-primary d-flex align-items-center justify-content-center py-2 button-normal'><button style={{ background: item.attributes[1]?.option_index.option2 }} className='color-btn me-2'></button> {item.attributes[0].option_index.option}</button>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </> : products[0]?.attributes[1] ? <>
                                            <div className='row mt-4 text-start'>
                                                <h3>{products[0]?.attributes[1]?.name}</h3>
                                            </div>

                                            <div className='row boxs'>
                                                {
                                                    products.map((item, index) => {
                                                        return <div className='col-4 mb-2' key={index} onClick={() => setfilterid(index)}>
                                                            <button className={index === filterid ? "btn btn-primary d-flex align-items-center justify-content-center py-2 active" : "btn btn-primary d-flex align-items-center justify-content-center py-2 button-normal"}>{item.attributes[1]?.option_index.option}</button>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </> : ""
                                    }


{
                                        products[0]?.attributes[2]?.name === "Colour" ? <>
                                            <div className='row mt-4 text-start'>
                                                <h3>{products[0]?.attributes[2]?.name}</h3>
                                            </div>

                                            <div className='row boxs'>
                                                {
                                                    products.map((item, index) => {
                                                        return <div className='col-4 mb-2' key={index} onClick={() => setfilterid(index)}>
                                                            <button className='btn btn-primary d-flex align-items-center justify-content-center py-2 button-normal'><button style={{ background: item.attributes[2]?.option_index.option2 }} className='color-btn me-2'></button> {item.attributes[0].option_index.option}</button>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </> : products[0]?.attributes[2] ? <>
                                            <div className='row mt-4 text-start'>
                                                <h3>{products[0]?.attributes[2]?.name}</h3>
                                            </div>

                                            <div className='row boxs'>
                                                {
                                                    products.map((item, index) => {
                                                        return <div className='col-4 mb-2' key={index} onClick={() => setfilterid(index)}>
                                                            <button className={index === filterid ? "btn btn-primary d-flex align-items-center justify-content-center py-2 active" : "btn btn-primary d-flex align-items-center justify-content-center py-2 button-normal"}>{item.attributes[2]?.option_index.option}</button>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                        </> : ""
                                    }


                                </> : <>
                                    <Box sx={{ mt: -9 }}>
                                        <Skeleton width="100%" height="400px" />
                                    </Box>
                                </>
                            }



                        </div>
                    </div>


                </div>

                <div className='related-product-main pt-5 pb-4'>
                    <div className='container'>
                        <div className='row text-start'>
                            <h2>You may also like</h2>
                        </div>

                        <div className='row mt-4'>
                            {
                                categorydata.map((item, index) => {
                                    return <div className='col-lg-3 col-6 mb-3' key={index}>
                                        <div className={a === index ? "card-1 card-2 g-0" : "card-1 g-0"}>
                                            <div className='container py-3 px-lg-4'  onClick={() => click(index,item.product.urlName)}>
                                                <div className='row text-start'>
                                                    <div className='col-lg-6 col text-center'>
                                                        <h4>Best Seller</h4>
                                                    </div>
                                                </div>

                                                <div className='row img-box'>
                                                    <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.product}`} alt='' className='mx-auto img-fluid'></img>
                                                </div>

                                                <div className='row text-start mt-2'>
                                                    <h2>{item.product.name}</h2>
                                                </div>
                                                <div className='row text-start'>
                                                    <h5>Starting at</h5>
                                                </div>
                                                <div className='row text-start '>
                                                    <h2>€{item.product.sell_price}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>



                <div className='welcome-main '>
                    <div className='container mb-5'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box'>
                                    <div className='container'>
                                        <div className='row my-lg-0 my-4'>
                                            <div className='col-lg-6 content-center text-start ps-5'>
                                                <div className='container'>
                                                    <div className='row'>
                                                        <h1>Welcome to iteek</h1>
                                                    </div>

                                                    <div className='row mt-2'>
                                                        <p>The best prices for high-quality renewed
                                                            goods by sellers we’ve checked and vetted. We
                                                            don’t mind if you Google us.</p>
                                                    </div>

                                                    <div className='row mt-2'>
                                                        <button className='btn btn-primary'>Get to Know us</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-lg-6'>
                                                <img src={welcomedesign} className='img-fluid'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detailpage
