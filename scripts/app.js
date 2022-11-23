//swiper js
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 5,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

//gsap js

let tl = gsap.timeline();

tl.from('header .anim0', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.4,
});
tl.from(
  'header .anim0-1',
  {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut,
  },
  '-=1'
);

tl.from('.anim1', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
});
tl.from('.card', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
tl.from(
  '.anim1-1',
  {
    y: -200,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 0.3,
  },
  '-=1'
);
tl.from(
  '.card-text',
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 0.3,
  },
  '-=1'
);
tl.from('.anim2-0', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
tl.from(
  '.anim2',
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 0.3,
  },
  '-=1'
);
tl.from('.impact-story h1, .impact-img, .impact-text h2, .impact-text-1 li', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
tl.from('.build-nation-img, .bn-text, .build-nation p', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
tl.from('.gallery h1, .myswiper-1', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
tl.from('.myswiper-2 img', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
tl.from('.footer, .footer h1, .post, .footer-btn, footer .buttom', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
  stagger: 0.3,
});
