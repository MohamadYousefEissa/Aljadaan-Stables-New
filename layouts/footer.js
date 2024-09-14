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
              <a href="/index.html">Home</a>
              <a href="">About us</a>
              <a href="">Syria</a>
            </div>
            <div class="d-flex flex-column gap-2 gap-md-0">
              <a href="">Partnership</a>
              <a href="/stallions.html">Stallions</a>
              <a href="">Mares</a>
            </div>
            <div
              class="d-flex flex-row flex-md-column gap-4 gap-md-0 flex-grow-1 mt-2 mt-md-0"
            >
              <a href="" class="last-two-anchors">Offsprings</a>
              <a href="/contactus.html" class="last-two-anchors">Contact us</a>
            </div>
          </div>
          <div
            class="col d-flex gap-4 justify-content-center justify-content-lg-end mt-5 mt-md-0"
          >
            <a href="">
              <img
                src="./icons/facebook.svg"
                alt="facebbok"
                class="img-fluid"
              />
            </a>
            <a href="https://www.instagram.com/aljadaanstables" target="_blank">
              <img
                src="./icons/instagram.svg"
                alt="instagram"
                class="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
`;
const footer = document.createElement("footer");
footer.innerHTML = footerContent;
main.insertAdjacentElement("afterend", footer);
