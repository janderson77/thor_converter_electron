import React from 'react';
import {Nav, Navbar, NavbarBrand, NavLink} from 'reactstrap';
import './css/styles.css'

const NavBar = () => {
    return(
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top " id="mainNav">
            <div className='ml-auto '>
                <NavbarBrand className="navbar-brand"  href="#page-top">T.H.O.R.</NavbarBrand>
            </div>
            
            <div className="container no-right-margin no-right-padding">
                
                <div className='d-flex'>
                    <Nav className='ms-auto'>
                        
                        <NavLink href=''>About</NavLink>
                        <NavLink href=''>Projects</NavLink>
                        <NavLink href=''>Contact</NavLink>
                    </Nav>
                </div>
                {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button> */}
                {/* <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
                    </ul>
                </div> */}
            </div>
        </Navbar>
    );
};



export default NavBar;