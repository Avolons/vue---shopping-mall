"use strict";

document.querySelector(".share_main_back").style.display = "block";

document.querySelector(".share_main_sharebtn").addEventListener('click', function () {
  window.open("http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie");
});

document.querySelector(".share_main_back").addEventListener('click', function () {
  window.history.back(-1);
});