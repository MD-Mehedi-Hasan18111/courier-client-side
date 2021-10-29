import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceCard from '../../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://powerful-tor-47395.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="container my-3">
                <h1 className="fw-bold text-center pb-3">Our <span style={{color: "#ED1C24"}}>Services!</span></h1>
                {
                    !services.length ? <div className="text-center">
                    <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                    </div> : <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-12 g-4 ms-4">
                    {
                        services?.map(service => <ServiceCard service={service} />)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default Services;