"use strict";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Breakpoints
  breakpoints: {
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },
});

// swiperContainer.addEventListener("mousedown", () => {
//   swiper.slideNext();
// });

document.addEventListener("DOMContentLoaded", () => {
  let opened = false;

  const burgetBtn = document.getElementById("burger-btn");
  const burgerContent = document.getElementById("burger-content");
  const burgerButtonClose = document.getElementById("burger-button-close");

  if (!burgerContent) {
    console.log("not found");
    return;
  }
  if (!burgetBtn) {
    console.log("not found");
    return;
  }

  burgerButtonClose.addEventListener("click", () => {
    opened = false;
    burgerContent.style.display = "none";
  });

  console.log(burgetBtn);
  burgetBtn.addEventListener("click", () => {
    console.log("CLICKED");

    if (opened) {
      burgerContent.style.display = "none";
    } else {
      burgerContent.style.display = "flex";
    }

    opened = !opened;
  });
});
