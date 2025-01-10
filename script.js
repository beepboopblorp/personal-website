const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
const duckimg = document.getElementById("duck");

btn.addEventListener("click", function mode() {
  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    duckimg.src = "https://www.motosha.com/files/preview/2000x1333/26024-yellow-duckling-portrait-black-background.jpg";
  } else {
    theme.href = "light.css";
    duckimg.src = "https://www.warrenphotographic.co.uk/photography/bigs/06514-Yellow-duckling-white-background.jpg";
  }
});