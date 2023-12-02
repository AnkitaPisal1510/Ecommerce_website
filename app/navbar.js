"use client"
import React from 'react';
import Link from 'next/link';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';


const MyNavbar = () => {
  return (
     <nav class="navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">MixMall</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="d-flex">
              <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul>

                  <li className="nav-item">
                    <Link href="/about" passHref legacyBehavior>
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  </ul>
                  <ul>
                  <li className="nav-item">
                    <Link href="/login" passHref legacyBehavior>
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>
                  </ul>
                  <ul>
                  <li className="nav-item">
                    <Link href="/cart" passHref legacyBehavior>
                      <a className="nav-link">Cart</a>
                    </Link>
                  </li>
                  </ul>

            </div>
      </nav>
   );
 };

export default MyNavbar;
