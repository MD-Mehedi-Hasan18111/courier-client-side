import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="ms-3">
                        <h3 className="logo">Red<span className="x">X</span></h3>
                        <p>Download the RedX app for the fastest solution</p>
                    </div>
                    <img width="220px" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h5>Quick Links</h5>
                    <p>C2C</p>
                    <p>Enterprise</p>
                    <p>Coverage Area</p>
                    <p>FAQ'S</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Office Location:</h3>
                    <p>199, Bir Uttam Mir Shawkot Street, <br />
                    Tezgaw Industrial area, Dhaka-1208.
                    </p>
                    <p>09728932748</p>
                    <p>contact@redx.com.bd</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Social Links</h4>
                    <div className="icons mb-3">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                    <small>&copy; Redx 2021. All rights reserved</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;