var swiper = new Swiper(".slider-container", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    centerSlide:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
             slidesPerView: 1,
        },
        900:{
            slidesPerView: 2,
       },
       1024:{
            slidesPerView: 4,
        },
    },
  });