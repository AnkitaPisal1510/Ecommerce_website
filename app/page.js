import React from 'react';
import Link from 'next/link'; 
import MyNavbar from "./navbar.js";
import Slider from "./slider.js"
import Fetch from "./fetchdata.js";


const Home = () => {
  return (
    <>    
    <div>
       <MyNavbar/>
    </div>
    <div class="containerforrowcol">
    <div class="row">
    <Link href="/Grocery" passHref legacyBehavior>
      <a className="col-1" style={{ textDecoration: 'none' }}>
        <img src="/grocery.png" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Grocery</p>
      </a>
    </Link>
    <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/mobile.png" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Mobiles</p>
        </a>
      </Link>  
      <Link href="/Mobiles" passHref legacyBehavior>  
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/fash1.png" alt="Image Description" width="64" height="64" /> 
        <p style={{ color: 'black',margin:'13px' }}>Fashion</p>
        </a>
        </Link>  

        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/electronic.jpeg" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Electronics</p>
        </a>
        </Link>  

        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/furniture.png" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Furniture</p>
        </a>
        </Link>  

        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/appliances.jpg" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Appliances</p>
        </a>
        </Link>  


        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/tavel.png" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Travel</p>
        </a>
        </Link>  


        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/beauty.jpeg" alt="Image Description" width="64" height="64" />
        <p style={{ color: 'black',margin:'13px' }}>Beauty</p>
        </a>
        </Link>  


        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1" style={{ textDecoration: 'none' }}>
        <img src="/toys.avif" alt="Image Description" width="64" height="64"/>
        <p style={{ color: 'black', margin:'13px' }}>Toys</p>
        </a>
        </Link>  


       </div>
     </div>
     <div><Slider/></div>
     <div className='products'>
        <div className='productDeals'><h1 style={{ fontSize: '20px' }}>Best Deals</h1></div>
          <div class="ProductRow">
              <div className="col-4">
              <div className="card">
                <Link href="/Fashion" passHref legacyBehavior>
                  <a className="pcol">
                    <img src="/shoe.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                    <div className="card-body">
                      <p className="card-title">Nike, PUMA & more</p>
                      <p className="card-text">Min. 40-60% Off</p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

         <div className="col-4">
            <div className="card">
              <Link href="/Fashion" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/watch.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">Armani Exchange,Guess</p>
                    <p className="card-text">Up to 80% off</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <Link href="/Fashion" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/kurti.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">Kurtas,Tokyo & More</p>
                    <p className="card-text">Min. 40% Off</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <Link href="/Fashion" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/beauty brush.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">SKINPLUS brush</p>
                    <p className="card-text">Min. 67% Off</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
            
          <div className="col-4">
            <div className="card">
              <Link href="/Electronics" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/freeze.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">Samsung236 & more</p>
                    <p className="card-text">Min. 67% Off</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
            
          <div className="col-4">
            <div className="card">
              <Link href="/Electronics" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/iphone.png" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">iphone 12 orange</p>
                    <p className="card-text">incl offers</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <Link href="/Fashion" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/kurti sets.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">Kurta sets</p>
                    <p className="card-text">Flat 70% Off</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
         
         
          <div className="col-4">
            <div className="card">
              <Link href="/Fashion" passHref legacyBehavior>
                <a className="pcol">
                  <img src="/sandals.jpeg" alt="Image Description" className="card-img-top" width="186" height="186" />
                  <div className="card-body">
                    <p className="card-title">Kurta sets</p>
                    <p className="card-text">Flat 70% Off</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
     <div><Fetch/></div>
</>


  );
};

export default Home;
