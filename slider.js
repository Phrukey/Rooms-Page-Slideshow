let slider = document.querySelector(".showcase-image");
let slides = Array.from(slider.children);
let prevBtn = document.querySelector(".left");
let nextBtn = document.querySelector(".right");
let slideSize = slides[0].getBoundingClientRect().width ;
let detail = document.querySelector(".showcase-details");
let details = Array.from(detail.children);
let detailWidth = details[0].clientWidth;
console.log(detailWidth)
let counter = 0;

nextBtn.addEventListener('click', e => {
  if(counter >= slides.length -1) return;
  slider.style.transition = 'transform .5s ease-in-out';
  detail.style.transition = 'transform .5s ease-in-out';
  counter++
  console.log(counter);
   slider.style.transform = 'translateX(' + (-slideSize * counter) +  'px)';
   detail.style.transform = 'translateX(' + (-detailWidth * counter) +'px)';
 
  
})

prevBtn.addEventListener('click', e => {
  if(counter <= 0) return;
  slider.style.transition = 'transform .5s ease-in-out';
  detail.style.transition = 'transform .5s ease-in-out';
  counter-- 


  slider.style.transform = 'translateX(' + (-slideSize * counter) +  'px)';
  detail.style.transform = 'translateX(' + (-detailWidth * counter) +'px)';
})
