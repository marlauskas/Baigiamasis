const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        768: {
        speed: 10000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowSlidePrev: true,
        allowSlideNext: true
        },
        // when window width is >= 480px
        1000: {
        speed: 1000,
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlidePrev: true,
        allowSlideNext: true
        }
    }
  });

var fname = document.querySelectorAll("input")[0]
var lname = document.querySelectorAll("input")[1]
var pnumber = document.querySelectorAll("input")[2]

var getstarted = document.querySelectorAll("button")[1]
var send = document.querySelectorAll("button")[5]

if(fname && fname.value) {
       alert ("Jūsų informacija sėkmingai pateikta");
    }
