import "../styles/main.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

  //animation

  gsap.registerPlugin(ScrollTrigger);

  function setupDesktopAnimations() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".integrate",
        start: "top 15%",
        scrub: 2,
        end: "+=400",
        pin: true,
      },
    });

    tl.fromTo(
      ".integrate__title",
      {
        y: 250,
        scale: 1.7,
        duration: 1.2,
        ease: "power2.out",
      },
      {
        y: -200,
        scale: 1,
        duration: 1.2,
      }
    )
      .to(
        ".title-word",
        {
          y: 150,
          duration: 1.5,
          stagger: 1,
        },
        "+=1.2"
      )
      .fromTo(
        ".animate-container.integrate__pic-container .animate__column",
        {
          y: -530,
        },
        {
          y: -120,
          opacity: 1,
          duration: 3.8,
          ease: "none",
        },
        "-=4.5"
      )
      .to(
        ".animate-container.integrate__pic-container .animate__column",
        {
          rotationY: 90,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.2,
        },
        "-=0.5"
      )
      .fromTo(
        ".animate-container.ship__pic-container .animate__column",
        { rotationY: -90, opacity: 0, y: 110 },
        {
          rotationY: 0,
          opacity: 1,
          y: 110,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .fromTo(
        ".ship-word",
        { y: -300 },
        {
          y: 230,
          duration: 0.8,
          stagger: 0.4,
        },
        "-=1.5"
      );
  }

  function setupMobileAnimations() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".integrate",
        start: "top 30%",
        scrub: 1,
        end: "+=200",
        pin: true,
      },
    });

    tl.fromTo(
      ".integrate__title",
      {
        y: 0,
        scale: 1.3,
        opacity: 0,
        ease: "power2.out",
      },
      {
        y: -70,
        scale: 1,
        opacity: 1,
        duration: 1.2,
      }
    )
      .to(
        ".integrate__title",
        {
          y: 30,
          opacity: 0,
          duration: 1.5,
        },
        "+=1.5"
      )
      .fromTo(
        ".animate-container.integrate__pic-container .animate__column",
        {
          y: -530,
        },
        {
          y: -50,
          opacity: 1,
          duration: 3.8,
          ease: "none",
        },
        "-=5"
      )
      .to(
        ".animate-container.integrate__pic-container .animate__column",
        {
          rotationY: 90,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.2,
        },
        "-=0.5"
      )
      .fromTo(
        ".animate-container.ship__pic-container .animate__column",
        { rotationY: -90, opacity: 0, y: 0 },
        {
          rotationY: 0,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .fromTo(
        ".ship__title",
        { y: -300 },
        {
          y: 0,
          duration: 0.8,
        },
        "-=1.5"
      );
  }

  function initAnimations() {
    if (window.innerWidth > 768) {
      setupDesktopAnimations();
    } else {
      setupMobileAnimations();
    }
  }

  initAnimations();

  window.addEventListener("resize", () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
    initAnimations();
  });
});
