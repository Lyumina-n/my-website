window.addEventListener('scroll', function(){
  var scrollPosition=window.scrollY;
  var sections=document.querySelectorAll('section');

  sections.forEach(function(section){
    var top=section.offsetTop;
    var height=section.offsetHeight;

    if(scrollPosition>=top&&scrollPosition<top+height){
      var id=section.getAttribute('id');
      document.querySelector('nav a[href="#'+id+'"]').classList.add('active');
    }else{
      var id=section.getAttribute('id');
      document.querySelector('nav a[href="#'+id+'"]').classList.remove('active');
    }
  });
});

var swiper = new Swiper(".mySwiper", {
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


