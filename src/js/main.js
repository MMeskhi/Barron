//Preload no transitions
document.body.classList.remove("preload");

//Sliders
if (document.getElementById("mainPage")) {
  const swiper = new Swiper(".collection .mySwiper", {
    slidesPerView: 6,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: false,
    },
  });
}
