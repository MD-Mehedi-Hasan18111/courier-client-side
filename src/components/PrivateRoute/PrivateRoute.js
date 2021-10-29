import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PrivateRoute.css';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();

    if(isLoading){
        return <Spinner className="loading" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }

    return (
        <Route
            {...rest}
        render={({ location }) =>
            user.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/signin",
                state: { from: location }
                }}
            />
            )
        }
    />
    );
};

export default PrivateRoute;