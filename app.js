var swiper = new Swiper(`.mySwiper`, {
      slidesPerView: 2,
      centeredSlides:false,
      slidesPerGroupSkip:1,
      grabCursor:true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        720: {
          slidesPerView: 3,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      spaceBetween: 10,
      loop: true,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


