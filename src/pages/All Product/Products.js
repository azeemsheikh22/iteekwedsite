import React, { useEffect, useState } from 'react'
import './Products.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { addtocart } from '../../features/Cartslice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../Loading'

const Products = () => {
    const [Allproducts, setAllProducts] = useState([]);
    const [item, setitem] = useState([]);
    const [categorydata, setcategorydata] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [loadersubmit, setloadersubmit] = useState(false)
    const [allValue, setallValue] = useState('');
    const dispatch = useDispatch();
    const params = useParams();
    const navgate = useNavigate("")
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        if (params.id) {
            axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/category/${params.id}`)
                .then((res) => {
                    console.log(res.data)
                    setAllProducts(res.data)
                }).catch((e) => {
                    console.log(e)
                })
        } else {
            getdata();

        }
    }, []);





    const getdata = () => {
        setloadersubmit(true)
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/similar/products")
            .then((res) => {
                // console.warn(res.data)
                setAllProducts(res.data)
                setitem(res.data)
                setloadersubmit(false)
            }).catch((e) => {
                console.log(e)
                setloadersubmit(false)

            })

        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/enabled")
            .then((res) => {
                // console.warn(res.data)
                const pageSize = 13;
                const page = 1;
                const pages = Math.ceil(res.data.length / pageSize);
                const pageData = res.data.slice((page * pageSize) - pageSize, page * pageSize);
                setcategorydata(pageData)
            }).catch((e) => {
                console.log(e)
            })
    };

    const searchfilter = (e) => {
        const value = e.target.value.toLowerCase();
        let filteredData = [];

        // Check if Allproducts is an array before filtering
        if (Array.isArray(item)) {
            filteredData = item.filter((product) =>
                product.name.toLowerCase().includes(value)
            );

            setAllProducts(filteredData)
        }

        console.log(filteredData);
    };

    const handleCategoryFilter = (event) => {
        setSelectedValue(event.target.value);
        const value = event.target.value;
        // console.log(event.target.value);

        axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/category/${value}`)
            .then((res) => {
                // console.log(res.data)
                setAllProducts(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };

    // const handleallCategoryFilter = (event) => {
    //     const value = event.target.value;
    //     setallValue(value)
    //     console.warn("hello")
    //     getdata()

    // }

    if (loadersubmit) {
        return (
            <Loading />
        )
    }


    return (
        <div>
            <Navbar />
            <div className='product-main'>
                <div className='container my-5'>
                    <div className='row'>

                        <div className='col-lg-3 col-12 col-sm-12'>
                            <div className='container-fluid side-content'>
                                <div className='row'>
                                    <div className="col-sm-6 col-lg-12 text-start">
                                        <label for="sadasd" className="form-label labelheading">Search</label>
                                        <input type="text" className="form-control" onChange={searchfilter} id="sadasd"
                                            aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className='row mt-4 mb-2 text-start'>
                                    <label className='labelheading'>Categories</label>
                                </div>

                                <div className='row g-0 mt-3 mb-3'>
                                    {
                                        categorydata ? categorydata.map((item, index) => {
                                            return <div className="col-lg-12 col-12 col-sm-4 mb-1 category-check gap-2" key={index}>
                                                <input className="form-check-input" type="radio" onChange={handleCategoryFilter} name="flexRadioDefault" id="flexRadioDefault3" value={item.urlName}
                                                    checked={selectedValue === item.urlName} />
                                                <label className="form-check-label" for="flexRadioDefault3">
                                                    {item.name}
                                                </label>
                                            </div>
                                        }) : ""
                                    }


                                    {/* <div className="col-lg-12 col-6 mb-1 category-check gap-2">
                                        <input className="form-check-input" type="radio" onChange={handleCategoryFilter} name="flexRadioDefault" id="flexRadioDefault1" value="accessories"
                                            checked={selectedValue === 'accessories'} />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Accessories
                                        </label>
                                    </div>

                                    <div className="col-lg-12 col-6 mb-1 category-check gap-2">
                                        <input className="form-check-input" type="radio" onChange={handleCategoryFilter} name="flexRadioDefault" id="flexRadioDefault2"
                                            value="cable"
                                            checked={selectedValue === 'cable'} />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Cable
                                        </label>

                                    </div>
                                    <div className="col-lg-12 col-6 mb-1 category-check gap-2">
                                        <input className="form-check-input" type="radio" onChange={handleCategoryFilter} name="flexRadioDefault" id="flexRadioDefault2"
                                            value="incell-lcds"
                                            checked={selectedValue === 'incell-lcds'} />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Incell LCDS
                                        </label>

                                    </div> */}
                                </div>
                            </div>
                        </div>


                        <div className='col-lg col-sm-12'>
                            <div className='container-fluid'>
                                <div className='row height-product'>
                                    {Allproducts ?
                                        Allproducts.map((item, index) => {
                                            return <div className='col-lg-4 col-sm-6' key={index}>
                                                <div className='cart-box'>
                                                    <div className='container-fluid'>
                                                        <div className='row cart-img-box' onClick={() => navgate(`/product-detail/${item.products ? item.products[0].urlName : item.product.urlName}`)}>
                                                            <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.products ? item.products[0].images[0] : item.product.images[0]}`} alt='' className='img-fluid'></img>
                                                        </div>
                                                        <div className='row mt-3 text-start'>
                                                            <h4>{item.products ? item.products[0].name : item.product.name}</h4>
                                                        </div>
                                                        <div className='row text-start'>
                                                            <h5>£ {item.products ? item.products[0].sell_price : item.product.sell_price}</h5>
                                                        </div>
                                                        <div className='row row-icon'>
                                                            <div className='col-2 text-start'>
                                                                <i className="fa-solid fa-cart-shopping" onClick={() => dispatch(addtocart(item.products ? item.products[0] : item.product))}></i>
                                                            </div>
                                                            <div className='col-2 '>
                                                                <i className="fa-solid fa-eye" onClick={() => navgate(`/product-detail/${item.products ? item.products[0].urlName : item.product.urlName}`)} style={{ fontSize: "20px" }}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                        : ""
                                    }

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

export default Products
