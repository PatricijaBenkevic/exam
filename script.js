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

const burgerContent = document.getElementById("burger-content");
const burgerButtonClose = document.getElementById("burger-button-close");
const burgerBtn = document.getElementById("burger-btn");

burgerBtn.addEventListener("click", () => {
  burgerContent.style.display = "block";
});

burgerButtonClose.addEventListener("click", () => {
  burgerContent.style.display = "none";
});

// JavaScript to update the navigation style on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const fixedNav = document.querySelector(".fixed-nav");

  if (scrollPosition > 0) {
    fixedNav.style.backgroundColor = "black"; // Change background color when scrolled
  } else {
    fixedNav.style.backgroundColor = "transparent"; // Reset background color when at the top
  }
});
