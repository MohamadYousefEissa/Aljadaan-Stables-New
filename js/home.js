const aboutusArticle = document.querySelector("#home-article p");
const readmoreButton = document.querySelector("#home-article button");

// for read more
readmoreButton.addEventListener("click", () => {
  aboutusArticle.innerHTML +=
    "<br/><br/> paragraph 1 ... <br/><br/> paragraph 2 ...";
  readmoreButton.classList.add("d-none");
});

// for hiding mobile menu after click at the anchor
const navAnchors = document.querySelectorAll("#not-link");
navAnchors.forEach((el) => {
  el.addEventListener("click", () => {
    nav.reverse();
    hamburger.checked = false;
  });
});
