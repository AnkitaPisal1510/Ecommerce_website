import MyNavbar from "./navbar.js";
import Slider from "./slider.js"



const Home = () => {
  return (
    <>    
    <div>
       <MyNavbar/>
    </div>
    <div class="containerforrowcol">
    <div class="row">
    <div class="col-1">
      <img src="/grocery.png" alt="Image Description" width="100" height="90" />
          <p>Grocery</p>
      </div>
        <div class="col-1">
        <img src="/mobile.png" alt="Image Description" width="100" height="90" />
        <p>Mobiles</p>
        </div>
        <div class="col-1">
        <img src="/fash1.png" alt="Image Description" width="100" height="90" /> 
        <p>Fashion</p>
        </div>
        <div class="col-1">
        <img src="/electronic.jpeg" alt="Image Description" width="100" height="90" />
        <p>Electronics</p>
        </div>
        <div class="col-1">
        <img src="/furniture.png" alt="Image Description" width="100" height="90" />
        <p>Furniture</p>
        </div>
        <div class="col-1">
        <img src="/appliances.jpg" alt="Image Description" width="100" height="90" />
        <p>Appliances</p>
        </div>
        <div class="col-1">
        <img src="/tavel.png" alt="Image Description" width="100" height="90" />
        <p>Travel</p>
        </div>
        <div class="col-1">
        <img src="/beauty.jpeg" alt="Image Description" width="100" height="90" />
        <p>Beauty</p>
        </div>
        <div class="col-1">
        <img src="/toys.avif" alt="Image Description" width="100" height="90" />
        <p>Toys</p>
        </div>
       </div>
     </div>
     <div><Slider/></div>
</>


  );
};

export default Home;
