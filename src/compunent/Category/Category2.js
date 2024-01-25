import React from 'react'
import './Category.css'
import airpods from '../../assiets/img/tv.png'
import headphone from '../../assiets/img/239032_0_ogo1io.png'
import phone from '../../assiets/img/353721_mobile-battery-png.png'

const Category2 = () => {
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
                                        <h3>TV</h3>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='circle-box mx-auto'>
                                            <i class="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-7'>
                                <img src={airpods} alt='' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6 mb-3'>
                <div className='category-cart'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-7 cart-text'>
                                <div className='container'>
                                    <div className='row'>
                                        <h3>Headphones</h3>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='circle-box mx-auto'>
                                            <i class="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-5 d-flex align-items-end'>
                                <img src={headphone} alt='' className='img-fluid'></img>
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
                                        <h3>Battery</h3>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='circle-box mx-auto'>
                                            <i class="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-7'>
                                <img src={phone} alt='' className='img-fluid'></img>
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
