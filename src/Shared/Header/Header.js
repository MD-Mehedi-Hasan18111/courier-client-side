import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user, logOut} = useAuth();

    return (
        <div>
            <Navbar fixed="top" className="parent-nav shadow-lg" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/home">
                        <img width="120px" src={logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navigation ms-auto">
                    <NavLink activeClassName="selected" to="/home">Home</NavLink>
                    {
                        user?.email && <NavLink activeClassName="selected" to="/myOrders">My Orders</NavLink>
                    }
                    {
                        user?.email && <NavLink activeClassName="selected" to="/allOrders">Manage All Orders</NavLink>
                    }
                    {
                        user?.email && <NavLink activeClassName="selected" to="/addService">Add Service</NavLink>
                    }
                    {
                        user?.email ? <>
                            <button onClick={logOut} className="btn btn-sm btn-danger me-2">Sign Out</button>
                            <p className="p-0 m-0 fw-bold">{user.displayName}</p>
                        </> : <Link to="/signin"><button className="btn btn-sm btn-danger">Sign In</button></Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;