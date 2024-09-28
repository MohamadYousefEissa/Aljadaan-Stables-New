Fancybox.bind('[data-fancybox="gallery"]', {
  Slideshow: {
    playOnStart: true,
  },
  Thumbs: false,
});
new Carousel(
  document.getElementById("myCarousel"),
  {
    Dots: false,
    Navigation: false,
    transition: "crossfade",
    Thumbs: {
      type: "classic",
    },
    Autoplay: {
      timeout: 3000,
      pauseOnHover: false,
      showProgress: false,
    },
  },
  { Thumbs, Autoplay }
);
