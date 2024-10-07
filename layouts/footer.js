const footerContent = `
      <div class="container p-5 pb-3 pb-md-5 px-md-0 px-lg-5">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-4 d-flex d-md-block justify-content-center">
            <img
              src="./images/main-logo.svg"
              alt="Logo"
              class="img-fluid"
              id="footer-logo"
            />
          </div>
          <div
            class="col-12 col-md-6 col-lg-5 row row-cols-2 row-cols-md-3 mt-5 mt-md-0 text-center text-md-start text-nowrap"
          >
            <div class="d-flex flex-column gap-2 gap-md-0">
              <a href="./index.html">Home</a>
              <a href="index.html#home-article">About us</a>
              <a href="#home-contactus" >Contact us</a>
            </div>
            <div class="d-flex flex-column gap-2 gap-md-0">
              <a href="./stallions.html">Stallions</a>
              <a href="#">Mares</a>
              <a href="#">Offsprings</a>
            </div>
            <div
              class="d-flex flex-row flex-md-column gap-4 gap-md-0 flex-grow-1 mt-2 mt-md-0"
            >
              <a href="index.html#home-pure-horses" class="last-anchor">The indigenous breed</a>
            </div>
          </div>
          <div
            class="col d-flex gap-4 justify-content-between justify-content-lg-end mt-5 mt-md-0"
          >
            <div class="d-flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100075902982163"
                target="_blank"
              >
                <img
                  src="./icons/facebook.svg"
                  alt="facebbok"
                  class="img-fluid"
                  width="30"
                />
              </a>
              <a
                href="https://www.instagram.com/aljadaanstables"
                target="_blank"
              >
                <img
                  src="./icons/instagram.svg"
                  alt="instagram"
                  class="img-fluid"
                  width="30"
                />
              </a>
            </div>
            <ul class="d-flex d-md-none gap-3">
              <li><a href="#">EN</a></li>
              <li><a href="#">AR</a></li>
            </ul>
          </div>
        </div>
      </div>
`;
const footer = document.createElement("footer");
footer.innerHTML = footerContent;
main.insertAdjacentElement("afterend", footer);
