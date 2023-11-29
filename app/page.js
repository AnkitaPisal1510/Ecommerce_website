import MyNavbar from "./navbar.js";
// import Fetch  from "./fetchdata.js";

const Home = () => {
  return (
    <>    
    <div>
       <MyNavbar/>
    </div>
    <div class="containerforrowcol">
    <div class="row">
        <div class="col-1">
            <p>Grocery</p>
        </div>
        <div class="col-1">
        <p>Mobiles</p>
        </div>
        <div class="col-1">
            
        <p>Fashion</p>
        </div>
        <div class="col-1">
        
        <p>Electronics</p>
        </div>
        <div class="col-1">
          
        <p>Furniture</p>
        </div>
        <div class="col-1">
          
        <p>Appliances</p>
        </div>
        <div class="col-1">
      
        <p>Travel</p>
        </div>
        <div class="col-1">
          
        <p>Beauty</p>
        </div>
        <div class="col-1">
        <p>Toys</p>
        </div>
    </div>
</div>
</>


  );
};

export default Home;
