gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "bottom",
        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-150",
          scrub: true,
        },
      }
    );
  });

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 0, opacity: 1 },
      {
        x: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "-50",
          end: "650",
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "-1500",
          end: "-500",
          scrub: true,
        },
      }
    );
  });

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 0, opacity: 1 },
      {
        x: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "-400",
          end: "650",
          scrub: true,
        },
      }
    );
  });
}
