import "../styles/main.scss";
import "./animate.js";

document.addEventListener("DOMContentLoaded", () => {
  //burger

  function handleBurger() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    const menuLinks = document.querySelectorAll(".header__list-item");
    const body = document.querySelector("body");

    if (!(burger && menu && body && menuLinks.length)) return;

    burger.addEventListener("click", () => {
      console.log("+++");
      burger.classList.toggle("active");
      menu.classList.toggle("mobile");
      body.classList.toggle("body_lock");
    });

    {
      if (window.innerWidth <= 1100) {
        for (let i = 0; i < menuLinks.length; i += 1) {
          menuLinks[i].addEventListener("click", () => {
            burger.classList.remove("active");
            menu.classList.remove("mobile");
            body.classList.remove("body_lock");
          });
        }
      }
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) {
        burger.classList.remove("active");
        menu.classList.remove("mobile");
        body.classList.remove("body_lock");
      }
    });
  }

  handleBurger();

  // show cases

  if (window.innerWidth >= 768) {
    document.querySelectorAll(".case").forEach(caseElement => {
      caseElement.addEventListener("mouseenter", function () {
        document.querySelectorAll(".case").forEach(el => {
          el.classList.add("hidden");
        });

        this.classList.remove("hidden");
      });
    });
  }

  if (window.innerWidth <= 768) {
    document.querySelectorAll(".case").forEach(caseElement => {
      if (caseElement.classList.contains("hidden")) {
        caseElement.classList.remove("hidden");
      }
    });
  }
});
