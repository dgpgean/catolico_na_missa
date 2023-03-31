import React, { useEffect } from 'react'

  import Swiper from 'swiper/bundle';

  import 'swiper/css/bundle';

  const swiper = new Swiper();

const Carousel = (props) => {

    useEffect(()=>{
        const swiper = new Swiper('.swiper', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
        
          // If we need pagination
         
        
          // Navigation arrows
          navigation:false,
        
          // And if we need scrollbar
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
         
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40,

              pagination: {
                el: '.swiper-pagination',
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            }
          }
        });

    },[props])


  return (
<div class="swiper">
  <div class="swiper-wrapper">
        {props.children}
 
  </div>
  <div class="swiper-pagination"></div>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <div class="swiper-scrollbar"></div>
</div>
  )
}


export default Carousel