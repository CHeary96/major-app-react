import React from 'react'

import '../NavigationBar/NavBar.css';
import Logo from '../../Images/logo.svg';
import {  Navbar , Nav } from 'react-bootstrap';

export default function NavBar() {
    return (

        <Navbar bg="success" sticky="top"  expand="lg" variant="dark">
            <Navbar.Brand href="/" >
                <img alt="logoImg" src={Logo} height="50px" width="60px" />
              <p className="brand">The Major™</p>
            </Navbar.Brand>
            <Navbar.Toggle className="toggle"/>
            <Navbar.Collapse>
                <Nav.Link href="HowItWorks" ><p className="links">How It Works</p></Nav.Link>
              <Nav.Link href="UserAuth" sticky="bottom" ><p className="links ">Create +</p></Nav.Link>
                </Navbar.Collapse>
                
            
            </Navbar>



    )
}
