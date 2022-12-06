import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';




function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3
  };

  return (
    <div className="main-page">
      <div className="title-bar">
        <div><img src='/logo1.png' alt='MyShop Logo'></img></div>
        <div className='header'>
        <h1>Welcome to the MyShop App</h1>
      </div>
      <div className='buttons'>
        <div><button>Log In</button></div>
        <div><button>Sign Up</button></div>
      </div>
      </div>
      <div className='content-box'>
        <div className='content-header'><p>Shopkeeping Made Easier</p></div>
        <Slider {...settings}>
        <div className='text-boxes'>
         <div className='text-box1'></div>
         <div className='text-box2'></div>
         <div className='text-box3'></div>
        </div>
        </Slider>
        
      </div>
        
       
    
    </div>
  );
}

export default App;
