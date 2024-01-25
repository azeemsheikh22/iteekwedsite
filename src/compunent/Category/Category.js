import React from 'react'
import './Category.css'
import airpods from '../../assiets/img/air_pods-removebg-preview.png'
import watch from '../../assiets/img/watch.png'
import phone from '../../assiets/img/iphones_-2-removebg-preview.png'

const Category = () => {
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
                                                <h3>Airpods</h3>
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
                                    <div className='col-5 cart-text'>
                                        <div className='container'>
                                            <div className='row'>
                                                <h3>Watches</h3>
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='circle-box mx-auto'>
                                                    <i class="fa-solid fa-arrow-right-long"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <img src={watch} alt='' className='img-fluid'></img>
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
                                                <h3>Phones</h3>
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

export default Category
