
"use client"
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function ImageSlider() {
    const settings = {
    dots: true,
  };
  return (
 <div className="image-slider-container">
      <Slider {...settings}>
         <div>
          <Image alt='faild to open this image' width={1000} height={1000} src="https://unsplash.com/photos/a-person-holding-a-book-in-their-hands-Q8wRYrjS9gc" />
        </div> 
        <div>
          <Image alt='faild to open this image' width={1000} height={1000} src="https://unsplash.com/photos/orange-flowers-IicyiaPYGGI" />
        </div>
        <div>
          <Image alt='faild to open this image' width={1000} height={1000} src="https://unsplash.com/photos/girl-reading-book-XqXJJhK-c08" />
        </div>
        <div>
          <Image alt='faild to open this image' width={1000} height={1000} src="https://unsplash.com/photos/a-painting-of-a-river-surrounded-by-pink-flowers-ZWg3KmVdtVw" /> 
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider