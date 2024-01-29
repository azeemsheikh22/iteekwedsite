import React, { useEffect, useState } from 'react'
import './Index.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import img0 from '../../assiets/img/smart watches png.png'
import img1 from '../../assiets/img/battery IPHOne.png'
import img2 from '../../assiets/img/iphones_-2-removebg-preview.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Index = () => {

  const img = [img0, img1, img2]
  const [imgNo, setimgNo] = useState(0)
  const [imgdata, setimgdata] = useState([])
  const params = useParams();
  // console.log(params)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    getdata()
  }, [])

  const [productdata, setproductdata] = useState([])

  const getdata = () => {
    axios.get(`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/byUrl/${params.id}`)
      .then((res) => {
        console.warn(res.data)
        setproductdata(res.data)
        setimgdata(res.data[0].images)
      }).catch((e) => {
        console.log(e)
      })
  };

  return (
    <div>
      <Navbar />
      <div className='single-page-main py-4'>
        <div className='container mt-4 mb-4'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='img-box'>
                      <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${productdata[0]?.images[imgNo]?productdata[0].images[imgNo]:""}`} className='img-fluid' alt=''></img>
                    </div>
                  </div>
                </div>

                <div className='row mt-4'>
                  {
                    // productdata[0].images?
                    imgdata.map((item, index) => {
                      return <div className='col-4' key={index}>
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
                <h2>{productdata[0]?.name?productdata[0].name:""}</h2>
              </div>

              <div className='row mt-2'>
                <h3>$ {productdata[0]?.sell_price?productdata[0].sell_price:0}</h3>
              </div>

              <div className='row mt-4'>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur It is a long established fact that a
                  reader will be distracted by the readable content .</p>
              </div>

              <div className='row line-black mt-3'>
              </div>

              <div className='row mt-lg-4 mt-3 add-btn'>
                <div className='col'>
                  <button className='btn btn-primary'>ADD TO CART</button>
                </div>
              </div>

              <div className='row mt-4'>
                <h4>Categories : accessories</h4>
              </div>
              {/* <div className='row mt-2'>
                <h4>Tags : accessories</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
