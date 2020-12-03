import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">BOOK MANAGEMENT APPLICATION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href='/' activeClassName='activeNav' exact={true}> Dashboard </Nav.Link>
                <Nav.Link href='/add' activeClassName='activeNav'>Add Book</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;