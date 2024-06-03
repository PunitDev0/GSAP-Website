const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
let video = document.querySelector(".page1_video");

main.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + 20 + "px";
  cursor.style.top = dets.y + 20 + "px";
});
// video.addEventListener("mouseenter", (dets) => {
//   cursor.classList.add("scroll-on");
//   cursor.classList.remove("cursor");
// });

init();
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 30%",
    end: "top 0",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -120%",
    end: "top -130%",
    scrub: 3,
  },
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -450%",
    end: "top -400%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});
tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

let boxes = document.querySelectorAll(".box");
boxes.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    console.log(elem);
    let img = elem.getAttribute("data-image");
    cursor.style.width = "300px";
    cursor.style.height = "300px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url("${img})`;
  });

  elem.addEventListener("mouseleave", () => {
    cursor.style.backgroundImage = "none";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
  });
});
