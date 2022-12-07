import React from 'react'
import { Carousel } from 'react-bootstrap'


const Slider = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={3000}>
      <div className="text-box1">text1</div>
                  
        
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <div className="text-box2">text2</div>
                  
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="text-box3">text3</div>
       
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider