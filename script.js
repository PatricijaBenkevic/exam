"use strict"

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
    },

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    //Breakpoints
    breakpoints:{
      600:{
          slidesPerView:1,
          slidesPerGroup:1,
          allowSlideNext:true,
          allowSlidePrev:true,
      },
      1000: {
          slidesPerView:3,
          slidesPerGroup:3,
          allowSlideNext:true,
          allowSlidePrev:true,
      }
  }

  });

  swiperContainer.addEventListener('mousedown', () => {
    swiper.slideNext(); 
  });
