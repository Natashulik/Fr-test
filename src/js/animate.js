//animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function setupDesktopAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation__wrapper",
      start: "top 0%",
      scrub: 1.5,
      end: "+=1700",
      anticipatePin: 1,
      pin: true,
    },
  });

  tl.fromTo(
    ".integrate__title",
    {
      y: 250,
      scale: 1.5,
      ease: "power2.out",
    },
    {
      y: -200,
      opacity: 1,
      scale: 1,
      duration: 1.2,
    }
  )
    .to(
      ".title-word",
      {
        y: 150,
        duration: 1.8,
        stagger: 1,
      },
      "+=1.2"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        y: -600,
      },
      {
        y: 100,
        opacity: 1,
        duration: 5.5,
        ease: "none",
      },
      "-=5"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        rotationY: 0,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      {
        rotationY: 90,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=0.5"
    )
    .fromTo(
      ".animate-container.ship__pic-container .animate__column",
      { rotationY: 90, opacity: 0, y: -950 },
      {
        rotationY: 0,
        opacity: 1,
        y: -950,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .to(
      ".animate-container.ship__pic-container .animate__column",
      {
        y: -800,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=1"
    )
    .fromTo(
      ".ship-word",
      { y: -1200 },
      {
        y: -800,
        ease: "power2.out",
        duration: 1.5,
        stagger: 0.4,
      },
      "-=2.5"
    );
}

function setupMobileAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation__wrapper",
      start: "top 0%",
      scrub: 0.5,
      end: "+=800",
      pin: true,
      anticipatePin: 0.5,
    },
  });

  tl.fromTo(
    ".integrate__title",
    {
      y: 300,
      opacity: 0,
      scale: 1.5,
      ease: "power2.out",
    },
    {
      y: 200,
      opacity: 1,
      scale: 1,
      duration: 1.2,
    }
  )
    .to(
      ".integrate__title",
      {
        y: 300,
        opacity: 0,
        duration: 2,
        stagger: 1,
      },
      "+=1"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        y: -400,
      },
      {
        y: 300,
        opacity: 1,
        duration: 4,
        ease: "none",
      },
      "-=4.5"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        rotationY: 0,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      },
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
      { rotationY: 90, opacity: 0, y: -710 },
      {
        rotationY: 0,
        opacity: 1,
        y: -710,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .to(".animate-container.ship__pic-container .animate__column", {
      y: -600,
      duration: 2,
      ease: "power2.out",
    })
    .fromTo(
      ".ship__title",
      { y: -1100 },
      {
        y: -600,
        ease: "power2.out",
        duration: 4,
        stagger: 0.2,
      },
      "-=2"
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
