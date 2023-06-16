document.addEventListener("DOMContentLoaded", function(){
    const slideContainer=document.querySelector(".slider-container");
    const prevButton=document.querySelector(".prev-button");
    const nextButton=document.querySelector('.next-button');

    let slideIndex=0;
    const slideWidth=slideContainer.offsetWidth/3;
    const totalSlides=slideContainer.querySelectorAll(".slide-item").length;

    nextButton.addEventListener("click", function(){
        slideIndex++;
        if(slideIndex>=totalSlides){
            slideIndex=0;
        }
        slideContainer.style.transform=`translateX(${-slideWidth*slideIndex}px)`;
    });
    prevButton.addEventListener("click", function(){
        slideIndex--;
        if(slideIndex<0){
            slideIndex=totalSlides-1;
        }
        slideContainer.style.transform=`translateX(${-slideWidth*slideIndex}px)`;
    });
})