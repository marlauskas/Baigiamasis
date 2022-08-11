const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowSlidePrev: true,
        allowSlideNext: true
        },
       
        1000: {
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

if(fname && fname.value ) {
       alert ("Jūsų informacija sėkmingai pateikta");
    }
