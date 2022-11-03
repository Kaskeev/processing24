function outputUpdate(vol) {
  let output = document.querySelector("#volume");
  output.value = `${vol} литров`;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwipers", {
  rewind: true,
  slidesPerView: 4,
  // autoplay: {
  //   delay: 4000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    addClassName: "swiper-next",
    strokeColor: "#007aff",
    prevEl: ".swiper-button-prev",
  },
});
