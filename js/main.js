const elChangeThemeBtn = document.querySelector(".header-btn");
var bg = document.querySelector(".hero--active");

elChangeThemeBtn.addEventListener("click" , function(){
  document.body.classList.toggle("theme-dark");
  bg.classList.toggle("bg-white");
});

