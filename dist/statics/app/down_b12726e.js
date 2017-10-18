"use strict";

document.querySelector(".share_main_back").style.display = "block";

document.querySelector(".share_main_sharebtn").addEventListener('click', function () {
  alert("请前往应用商店下载");
});

document.querySelector(".share_main_back").addEventListener('click', function () {
  window.history.back(-1);
});