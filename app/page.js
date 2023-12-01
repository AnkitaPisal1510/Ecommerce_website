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
      <a className="col-1">
        <img src="/grocery.png" alt="Image Description" width="100" height="90" />
        <p>Grocery</p>
      </a>
    </Link>
    <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/mobile.png" alt="Image Description" width="100" height="90" />
        <p>Mobiles</p>
        </a>
      </Link>  
      <Link href="/Mobiles" passHref legacyBehavior>  
        <a class="col-1">
        <img src="/fash1.png" alt="Image Description" width="100" height="90" /> 
        <p>Fashion</p>
        </a>
        </Link>  

        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/electronic.jpeg" alt="Image Description" width="100" height="90" />
        <p>Electronics</p>
        </a>
        </Link>  

        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/furniture.png" alt="Image Description" width="100" height="90" />
        <p>Furniture</p>
        </a>
        </Link>  

        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/appliances.jpg" alt="Image Description" width="100" height="90" />
        <p>Appliances</p>
        </a>
        </Link>  


        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/tavel.png" alt="Image Description" width="100" height="90" />
        <p>Travel</p>
        </a>
        </Link>  


        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/beauty.jpeg" alt="Image Description" width="100" height="90" />
        <p>Beauty</p>
        </a>
        </Link>  


        <Link href="/Mobiles" passHref legacyBehavior>
        <a class="col-1">
        <img src="/toys.avif" alt="Image Description" width="100" height="90" />
        <p>Toys</p>
        </a>
        </Link>  


       </div>
     </div>
     <div><Slider/></div>
     <div><Fetch/></div>
</>


  );
};

export default Home;
