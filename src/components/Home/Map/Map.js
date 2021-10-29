import React from 'react';
import './Map.css';
import map from '../../../images/map.PNG';

const Map = () => {
    return (
        <div style={{background: "#000000", color:"#fff"}}>
            <div className="container">
            <div className="map-area py-4">
            <div className="row d-flex align-items-center px-2">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <img width="60%" src={map} alt="map" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1>RedX's logistics services cover 64 districts and 493 upazilas across the country.</h1>
                    <p>We guarantee the fastest service nationwide for any of your logistics needs.</p>
                    <button className="btn btn-danger btn-lg">See Coverage Area</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Map;