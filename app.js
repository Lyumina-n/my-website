document.addEventListener("DOMContentLoaded", function() {
  const sliderContainer = document.querySelector(".slider-container");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  const slideItems = Array.from(sliderContainer.querySelectorAll(".slide-item"));
  const totalSlides = slideItems.length;
  const slideWidth = slideItems[0].offsetWidth;

  // Clone the first and last slides
  const firstSlideClone = slideItems[0].cloneNode(true);
  const lastSlideClone = slideItems[totalSlides - 1].cloneNode(true);

  // Append clones to the slider container
  sliderContainer.appendChild(firstSlideClone);
  sliderContainer.insertBefore(lastSlideClone, slideItems[0]);

  let slideIndex = 1; // Start at the first slide (excluding the clone)

  // Set initial transform position
  sliderContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;

  nextButton.addEventListener("click", function() {
    slideIndex++;
    sliderContainer.style.transition = "transform 0.3s ease-out";
    sliderContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
  });

  prevButton.addEventListener("click", function() {
    slideIndex--;
    sliderContainer.style.transition = "transform 0.3s ease-out";
    sliderContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
  });

  // Handle transition end to loop the slides
  sliderContainer.addEventListener("transitionend", function() {
    if (slideIndex === totalSlides + 1) {
      slideIndex = 1;
      sliderContainer.style.transition = "none";
      sliderContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
    } else if (slideIndex === 0) {
      slideIndex = totalSlides;
      sliderContainer.style.transition = "none";
      sliderContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
    }
  });
});
