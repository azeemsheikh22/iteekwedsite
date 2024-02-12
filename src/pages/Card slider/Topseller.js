import React from 'react'
import './Topseller.css'
import ipad2 from '../../assiets/img/ipad2.png'
import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import watch from '../../assiets/img/dsfsdfsdfsdf.png'
import tv from '../../assiets/img/tv.png'
import mac from '../../assiets/img/macbook.png'

const Topseller = () => {
  return (
    <div className='topseller-main'>
    <div className='container py-2 pb-5 px-lg-5'>
        <div className='row text-start mt-2'>
            <h2>Top Sellers <span>- Roll up, roll up!</span></h2>
        </div>

        <div className='row mt-4 card-main'>
            <div className='col-lg-4 col-sm-6'>
                <div className='card-1 py-3  text-start mb-3'>
                    <div className='row img-box'>
                        <img src={mac} alt='' className='img-fluid'></img>
                    </div>

                    <div className='row px-5'>
                        <h3>MacBooks</h3>
                    </div>
                    <div className='row px-5'>
                        <p>How do you like these apples?</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='card-1 py-3  text-start mb-3'>
                    <div className='row img-box'>
                        <img src={ipad2} alt='' className='img-fluid'></img>
                    </div>

                    <div className='row px-5'>
                        <h3>MacBooks</h3>
                    </div>
                    <div className='row px-5'>
                        <p>How do you like these apples?</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='card-1 py-3  text-start mb-3'>
                    <div className='row img-box'>
                        <img src={HEADPHONE} alt='' className='img-fluid'></img>
                    </div>

                    <div className='row px-5'>
                        <h3>MacBooks</h3>
                    </div>
                    <div className='row px-5'>
                        <p>How do you like these apples?</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='card-1 py-3  text-start mb-3'>
                    <div className='row img-box'>
                        <img src={watch} alt='' className='img-fluid'></img>
                    </div>

                    <div className='row px-5'>
                        <h3>MacBooks</h3>
                    </div>
                    <div className='row px-5'>
                        <p>How do you like these apples?</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='card-1 py-3  text-start mb-3'>
                    <div className='row img-box'>
                        <img src={tv} alt='' className='img-fluid'></img>
                    </div>

                    <div className='row px-5'>
                        <h3>MacBooks</h3>
                    </div>
                    <div className='row px-5'>
                        <p>How do you like these apples?</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='card-1 py-3  text-start mb-3'>
                    <div className='row img-box'>
                        <img src={HEADPHONE} alt='' className='img-fluid'></img>
                    </div>

                    <div className='row px-5'>
                        <h3>MacBooks</h3>
                    </div>
                    <div className='row px-5'>
                        <p>How do you like these apples?</p>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</div>
  )
}

export default Topseller
