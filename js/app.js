const nav = gsap.timeline({ paused: true, duration: 0.1 });
const hamburger = document.querySelector(".hamburger input");

nav.from("#mobile-menu", {
  left: "40%",
  opacity: 0,
  duration: 0.3,
});
nav.from("#mobile-menu li", {
  x: 100,
  opacity: 0,
  stagger: 0.1,
});
hamburger.addEventListener("change", (ev) => {
  if (!ev.target.checked) nav.reverse();
  else nav.play();
});
