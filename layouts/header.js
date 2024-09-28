const headerContent = `
       <nav>
      <div class="container">
        <div class="row">
          <div
            class="col d-flex flex-row flex-md-column flex-lg-row justify-content-between align-items-center py-3 px-2"
          >
            <a href="./index.html"
              ><img src="./images/main-logo.svg" alt="Logo" class="img-fluid"
            /></a>
            <label class="hamburger d-md-none">
              <input type="checkbox" id="hamburger" />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
            <ul
              class="d-none d-md-flex align-items-end h-100 gap-4 gap-xxl-5 mt-md-3 mt-lg-0 p-0"
            >
              <li><a href="index.html#home-article">About us</a></li>
              <li>
                <a href="index.html#home-pure-horses">The indigenous breed</a>
              </li>
              <li><a href="./stallions.html">Stallions</a></li>
              <li><a href="#">Mares</a></li>
              <li><a href="#">Offsprings</a></li>
              <li><a href="./contactus.html">Contact us</a></li>
            </ul>
            <ul class="d-md-none p-0" id="mobile-menu">
              <li>
                <a href="index.html#home-article" id="not-link">About us</a>
              </li>
              <li>
                <a href="index.html#home-pure-horses" id="not-link"
                  >The indigenous breed</a
                >
              </li>
              <li><a href="./stallions.html">Stallions</a></li>
              <li><a href="#">Mares</a></li>
              <li><a href="#">Offsprings</a></li>
              <li><a href="./contactus.html">Contact us</a></li>
            </ul>
            <ul class="d-none d-md-flex p-0 align-items-end h-100 gap-3">
              <li><a href="#">EN</a></li>
              <li><a href="#">AR</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
`;
const main = document.querySelector("main");
const header = document.createElement("header");
header.innerHTML = headerContent;
main.insertAdjacentElement("beforebegin", header);
