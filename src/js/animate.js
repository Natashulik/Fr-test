//animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function setupDesktopAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation__wrapper",
      start: "top 0%",
      scrub: 1,
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
      duration: 3.6,
    }
  )
    .to(
      ".title-word",
      {
        y: 150,
        duration: 5.4,
        stagger: 3,
      },
      "+=3.6"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        y: -600,
      },
      {
        y: 100,
        opacity: 1,
        duration: 16.5,
        ease: "none",
      },
      "-=15"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        rotationY: 0,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.6,
      },
      {
        rotationY: 90,
        opacity: 0,
        duration: 3.6,
        ease: "power2.inOut",
        stagger: 0.6,
      },
      "-=1.5"
    )
    .fromTo(
      ".animate-container.ship__pic-container .animate__column",
      { rotationY: 90, opacity: 0, y: -950 },
      {
        rotationY: 0,
        opacity: 1,
        y: -950,
        duration: 3.6,
        stagger: 0.6,
        ease: "power2.out",
      },
      "-=1.8"
    )
    .fromTo(
      ".animate-container.ship__pic-container .animate__column",
      {
        y: -950,
        ease: "power2.out",
      },
      {
        y: -800,
        duration: 6,
        stagger: 0.6,
        ease: "power2.out",
      }
    )
    .fromTo(
      ".ship-word",
      { y: -1200 },
      {
        y: -800,
        ease: "power2.out",
        duration: 4.7,
        stagger: 1.2,
      },
      "-=10"
    );

  //  console.log("Total duration:", tl.totalDuration());
}

function setupMobileAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation__wrapper",
      start: "top 20%",
      scrub: 0.5,
      end: "+=800",
      pin: true,
      anticipatePin: 0.5,
    },
  });

  tl.fromTo(
    ".integrate__title",
    {
      y: 100,
      scale: 1.3,
      opacity: 0,
      ease: "power2.out",
    },
    {
      y: 100,
      scale: 1.3,
      opacity: 1,
      duration: 0.1,
    }
  )
    .fromTo(
      ".integrate__title",
      {
        y: 100,
        scale: 1.3,
        ease: "power2.out",
      },
      {
        y: -100,
        scale: 1,
        duration: 2,
      }
    )
    .to(
      ".title-word",
      {
        y: 200,
        duration: 2,
      },
      "+=1.5"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        y: -400,
      },
      {
        y: 100,
        opacity: 1,
        duration: 5,
        ease: "none",
      },
      "-=5.2"
    )
    .fromTo(
      ".animate-container.integrate__pic-container .animate__column",
      {
        rotationY: 0,
        opacity: 1,
        ease: "power2.inOut",
      },
      {
        rotationY: 90,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=0.5"
    )
    .fromTo(
      ".animate-container.ship__pic-container .animate__column",
      { rotationY: 90, opacity: 0, y: -400 },
      {
        rotationY: 0,
        opacity: 1,
        y: -400,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }
    )
    .to(".animate-container.ship__pic-container .animate__column", {
      y: -200,
      duration: 4,
      ease: "power2.out",
    })
    .fromTo(
      ".ship__title",
      { y: -600 },
      {
        y: -150,
        ease: "power2.out",
        duration: 5,
        stagger: 0.2,
      },
      "-=4"
    );

  console.log("Mobile duration:", tl.totalDuration());
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
