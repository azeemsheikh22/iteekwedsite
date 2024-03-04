import React, { useEffect, useState } from 'react'
import './Index.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { addtocart } from '../../features/Cartslice'
import { useDispatch } from 'react-redux'
import Loading from '../../Loading'

const Index = () => {

  // const img = [img0, img1, img2]
  const [imgNo, setimgNo] = useState(0)
  const [noproduct, setnoproduct] = useState(0)
  const [imgdata, setimgdata] = useState([])
  const [loadersubmit, setloadersubmit] = useState(false)
  const params = useParams();
  console.log(params.id)
  const navgate = useNavigate("")
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    getdata()
  }, [])

  const [productdata, setproductdata] = useState([])

  const getdata = () => {
    setloadersubmit(true)
    axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/byUrl/${params.id}`)
      .then((res) => {
        console.warn("singleproduct", res.data)
        setproductdata(res.data)
        setimgdata(res.data[noproduct].images)
        setloadersubmit(false)
      }).catch((e) => {
        if (e.message === "Network Error") {
          console.log("Network Error")

        } else {
          setloadersubmit(false)
          console.log("singleproduct", e)
        }
        // navgate("/")
      })
  };

  if (loadersubmit) {
    return (
      <Loading />
    )
  }

  const handelrelatedproduct = (value) => {
    setnoproduct(value)
    axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/byUrl/${params.id}`)
      .then((res) => {
        // console.warn(res.data)
        setproductdata(res.data)
        setimgdata(res.data[value].images)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        // setloadersubmit(false)
      }).catch((e) => {
        console.log("related product error")
        // setloadersubmit(false)
        // navgate("/")
      })
  }

  return (
    <div>
      <Navbar />
      <div className='single-page-main '>

        <div className='top-header mt-2'>
          <NavLink to="/" style={{ textDecoration: "none", color: "#5B5858", fontWeight: "500" }}>HOME</NavLink>
          <a className='mx-2'>/</a>
          <a>SHOP PRODUCT</a>
        </div>
        <div className='container mt-5 mb-4'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='img-box'>
                      <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${productdata[noproduct]?.images[imgNo] ? productdata[noproduct].images[imgNo] : ""}`} className='img-fluid' alt=''></img>
                    </div>
                  </div>
                </div>

                <div className='row mt-4'>
                  {
                    // productdata[0].images?
                    imgdata.map((item, index) => {
                      return <div className='col-3' key={index}>
                        <div className='multi-box' onClick={() => setimgNo(index)}>
                          <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item}`} className='img-fluid' alt=''></img>
                        </div>
                      </div>
                    })
                  }

                </div>
              </div>
            </div>

            <div className='col-lg-6 content-product text-start px-lg-5 mt-4 mt-lg-0'>
              <div className='row'>
                <h2>{productdata[noproduct]?.display_name ? productdata[noproduct].display_name : ""}</h2>
              </div>

              <div className='row mt-2'>
                <h3>£ {productdata[noproduct]?.sell_price ? productdata[noproduct].sell_price : 0}</h3>
              </div>

              <div className='row mt-4'>
                <p>{productdata[noproduct]?.description ? productdata[noproduct].description : ""}</p>
              </div>

              {
                productdata[noproduct]?.attributes ? productdata[noproduct].attributes.map((item, index) => {
                  return <div className='row more-detail' key={index}>
                    <div className='col-6'>
                      <h3>{item.name}</h3>
                    </div>
                    <div className='col-6'>
                      {/* <button style={{ background: item.option_index.option2 }}></button> */}
                      <h3>{item.option_index.option}</h3>
                    </div>
                  </div>
                }) : ""
              }

              <div className='row line-black mt-3'>
              </div>

              <div className='row mt-lg-4 mt-3 add-btn'>
                <div className='col'>
                  <button className='btn btn-primary' onClick={() => dispatch(addtocart(productdata[noproduct]))}>ADD TO CART</button>
                </div>
              </div>

              <div className='row mt-4'>
                <h4>Categories : {productdata[noproduct]?.category ? productdata[noproduct].category.name : ""}</h4>
              </div>
              {/* <div className='row mt-2'>
                <h4>Tags : accessories</h4>
              </div> */}
            </div>
          </div>


          <div className='row related-product mt-4'>
            <div className='container-fluid'>
              <div className='row'>
                <h1>Related Products</h1>
              </div>

              <div className='row mt-4'>
                {
                  productdata ? productdata.map((item, index) => {
                    return <div className='col-lg-3 col-sm-6' key={index}>
                      <div className='related-img-box' onClick={() => handelrelatedproduct(index)}>
                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images[0]}`} className='img-fluid' alt=''></img>
                      </div>
                      <div className='row mt-3 px-4'>
                        <h3>{item.display_name}</h3>
                      </div>
                      <div className='row mt-1'>
                        <h4>€ {item.sell_price}</h4>
                      </div>
                    </div>
                  }) : ""
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
