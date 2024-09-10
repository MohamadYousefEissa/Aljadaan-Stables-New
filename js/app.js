const nav = gsap.timeline({ paused: true, duration: 0.1 });
const hamburger = document.querySelector(".hamburger input");

nav.from("#mobile-menu", {
  opacity: 0,
  duration: 0.15,
  display: "none",
});
nav.from("#mobile-menu li", {
  x: 100,
  opacity: 0,
  stagger: 0.05,
});
hamburger.addEventListener("change", (ev) => {
  if (!ev.target.checked) nav.reverse();
  else nav.play();
});

// const form = document.querySelector("form");
// const nameInput = form.querySelector("input[name='name']");
// const emailInput = form.querySelector("input[name='email']");
// const messageInput = form.querySelector("textarea[name='message']");
// const button = form.querySelector("button");
// form.addEventListener("submit", (ev) => {
//   ev.preventDefault();
//   if (
//     nameInput.value.length < 30 &&
//     nameInput.value.length >= 3 &&
//     emailInput.value.length < 40 &&
//     emailInput.value.length >= 3 &&
//     messageInput.value.length < 1000 &&
//     messageInput.value.length >= 3
//   ) {
//     nameInput.value = "";
//     emailInput.value = "";
//     messageInput.value = "";
//     button.innerText = "Send Successfully";
//     button.classList.add("bg-success");
//     setTimeout(() => {
//       button.innerText = "Send";
//       button.classList.remove("bg-success");
//     }, 2000);
//   }
// });
