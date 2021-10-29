import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <img src={notFound} alt="" /><br />
                <Link to="/home">
                    <button className="btn btn-danger">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;