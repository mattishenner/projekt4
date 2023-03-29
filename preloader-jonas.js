//Preloader script
let preload = document.querySelector(".preloader-bg");
let preloadContainer = document.querySelector(".preloader-text-container");
let preloadParagraph = document.querySelectorAll(".preloader-text");
let preloadImage = document.querySelectorAll(".preloader-img");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloadParagraph.forEach((p) => {
      setTimeout(() => {
        p.classList.add("active");
      });
    });
    preloadImage.forEach((preloadImage) => {
      setTimeout(() => {
        preloadImage.classList.add("imgactive");
      });
    });

    setTimeout(() => {
      preloadParagraph.forEach((p) => {
        setTimeout(() => {
          p.classList.remove("active");
          p.classList.add("fade");
        });
      });
      preloadImage.forEach((preloadImage) => {
        setTimeout(() => {
          preloadImage.classList.remove("imgactive");
          preloadImage.classList.add("imgfade");
        });
      });
      preload.forEach((preload) => {
        setTimeout(() => {
          preload.classList.add("fade");
        });
      });
    }, 2000);

    setTimeout(() => {
      preload.style.opacity = "0";
      preload.style.zIndex = "0";
      preload.style.display = "none";
      preloadImage.style.display = "none";
      preloadParagraph.style.display = "none";
    }, 2600);
  });
});
