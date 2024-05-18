const $ = document.querySelector.bind(document);
const url_company = "https://www.linkedin.com/company/asia-leap/"
const nav_trigger_button = $("#nav_trigger_button");
const nav_trigger_image = $("#nav_trigger_image");
const nav_menu = $("#nav_menu");
const contact_us = $("#redirect_aboutus");
const contact_us2 = $("#contact-us-2");
const prev_btn = $("#prev-button-article");
const next_btn = $("#next-button-article");
const prev_btn2 = $("#prev-button-testimonial");
const next_btn2 = $("#next-button-testimonial");
const linkedin = $("[linkto]")
if (linkedin) {
  linkedin.addEventListener('click', () => {
    window.open(url_company, "_blank")
  })
}

// add event trigger menu
nav_trigger_button.addEventListener("click", () => {
  nav_menu.classList.toggle("is-open-nav");
  // Toggle between two images
  if (nav_trigger_image.src.endsWith("button.png")) {
    nav_trigger_image.src = "assets/component/close.png";
  } else {
    nav_trigger_image.src = "assets/component/button.png";
  }
});

contact_us.addEventListener("click", () => {
  window.location.href = "mailto:projectcentre@asia-leap.com";
});
contact_us2.addEventListener("click", () => {
  window.location.href = "mailto:projectcentre@asia-leap.com";
});

// swiper
const swiper = new Swiper(".swiper1", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    stretch: -50,
    modifier: 1.2,
    depth: 60,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  breakpoints: {
    369: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1140: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: "#next-button",
    prevEl: "#prev-button",
  },
});

const swiper3 = new Swiper(".swiper3", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: "#next-button-testimonial",
    prevEl: "#prev-button-testimonial",
  },
});

// var splide = new Splide(".splide", {
//   perPage: 3,
//   loop: false,
//   autoWidth: true,
//   gap: 22,
//   trimspace: true,
//   arrows: false,
// });

// splide.mount();
// prev_btn.addEventListener("click", () => {
//   splide.go("<");
// });

// next_btn.addEventListener("click", () => {
//   splide.go(">");
// });

const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2000,
  delay: 50,
});

sr.reveal(".hero__text", { origin: "bottom" });

sr.reveal(".profit_growth", { origin: "bottom", delay: 50 });
sr.reveal("#solving__text", { origin: "bottom" });

sr.reveal(".values_component_01", { delay: 100, origin: "bottom" });
sr.reveal(".values_component_02", { delay: 250, origin: "bottom" });
sr.reveal(".values_component_03", { delay: 350, origin: "bottom" });
sr.reveal(".values_component_04", { delay: 450, origin: "bottom" });

sr.reveal(".industry-component-01 ", {
  origin: "bottom",
  distance: "60px",
  delay: 50,
  duration: 1400,
});
sr.reveal(".industry_component_02 ", {
  origin: "bottom",
  distance: "100px",
  delay: 100,
  duration: 1400,
});
sr.reveal(".industry_component_03 ", {
  origin: "bottom",
  distance: "120px",
  delay: 200,
  duration: 1400,
});

sr.reveal(".industry_component_04", {
  origin: "bottom",
  distance: "60px",
  delay: 50,
  duration: 1400,
});
sr.reveal(".industry_component_05 ", {
  origin: "bottom",
  distance: "80px",
  delay: 100,
  duration: 1400,
});
sr.reveal(".industry_component_06", {
  origin: "bottom",
  distance: "100px",
  delay: 150,
  duration: 1400,
});
sr.reveal(".industry_component_07", {
  origin: "bottom",
  distance: "120px",
  delay: 200,
  duration: 1400,
});
sr.reveal(".industry_component_08", {
  origin: "bottom",
  distance: "140px",
  delay: 350,
  duration: 1400,
});
sr.reveal(".industry_component_09", {
  origin: "bottom",
  distance: "160px",
  delay: 400,
  duration: 1400,
});
