$(document).ready(function(){//시작
  $(".main_menu > li").mouseover(function(){
    $(this).children(".sub_menu").stop().slideDown();
  });
  $(".main_menu > li").mouseout(function(){
    $(this).children(".sub_menu").stop().slideUp();
  });

  var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".sWrap1 .swiper-button-next",
      prevEl: ".sWrap1 .swiper-button-prev",
    },
    pagination: {
      el: ".sWrap1 .swiper-pagination",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".sWrap2 .swiper-button-next",
      prevEl: ".sWrap2 .swiper-button-prev",
    },
  });
});//끝