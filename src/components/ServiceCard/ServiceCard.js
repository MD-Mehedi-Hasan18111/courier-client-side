import React from 'react';
import './ServiceCard.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {

    // console.log(props.service);
    const {_id, name, image, description, charge} = props.service;

    return (
        <div>
            <Card style={{ width: '18rem', height: "100%" }}  className="shadow-sm">
            <img height="350px" width="100%" src={image} alt="" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>{description}</p>
                <h4>Charge: Rs. {charge}</h4>
                </Card.Text>
                <Link to={`/registration/${_id}`}>
                    <button className="btn btn-danger">Registration Service</button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;