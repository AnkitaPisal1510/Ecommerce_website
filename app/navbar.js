"use client"
import React from 'react';
import Link from 'next/link';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';


const MyNavbar = () => {
  return (
    <div>
      <div className="container">
        <BootstrapNavbar bg="light" expand="lg">
          <div className="MixMall navbar-brand">MixMall</div>          
          <FormControl type="text" placeholder="Search for product, Brands and more" className="mr-sm-2" />
          <BootstrapNavbar.Toggle aria-controls="navbarNav" />
          <BootstrapNavbar.Collapse id="navbarNav">
            <Nav className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/about" passHref legacyBehavior>
                  <a className="nav-link">About</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/login" passHref legacyBehavior>
                  <a className="nav-link">Login</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/cart" passHref legacyBehavior>
                  <a className="nav-link">Cart</a>
                </Link>
              </li>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
    </div>
  );
};

export default MyNavbar;
