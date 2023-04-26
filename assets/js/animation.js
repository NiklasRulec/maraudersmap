// ! ++++++++++ Animation verzögern ++++++++++

setTimeout(function () {
  document.querySelector(".animation-text").style.animationDelay = "0s";
}, 0);

// ! ++++++++++ Entferne Animation ++++++++++

setTimeout(function () {
  document.querySelector(".animation-text").remove();
}, 5000);
