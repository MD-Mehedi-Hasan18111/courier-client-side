import React from 'react';
import './Banner.css';
import bannerImg1 from '../../../images/bike-rider.png';

const Banner = () => {
    return (
        <div className="banner">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner mb-5">
                <div className="container">
                <div className="carousel-item active">
                <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-5">
                            <h1>Most riders across the <br />country 
                            <span style={{color: "#ED1C24"}}> 3500+ frontliners</span></h1>
                            <p>Get the benefit of Cash on Collection, You can book in simple 3 steps. Get Quote Now! Bangladesh's best international courier service near you.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={bannerImg1} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 text-center">
                            <h1>Sometimes We have<br />
                            <span style={{color: "#ED1C24"}}>Free Delivery</span></h1>
                            <p>Get the benefit of Cash on Collection, You can book in simple 3 steps. Get Quote Now! Bangladesh's best international courier service near you.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={bannerImg1} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 text-center">
                            <h1>24 Hours Ready To<br />
                            <span style={{color: "#ED1C24"}}>Delivery Faster</span></h1>
                            <p>Get the benefit of Cash on Collection, You can book in simple 3 steps. Get Quote Now! Bangladesh's best international courier service near you.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={bannerImg1} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;