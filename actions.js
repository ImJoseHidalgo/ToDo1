
let isDark = true;

document.querySelector(".plus").addEventListener("click", () => {
  document.querySelector(".form").classList.toggle("active");
  document.querySelector(".plus").classList.toggle("active");
});

document.querySelector(".dark-mode").addEventListener("click", () => {
  if (isDark) {
    //moon2();
    document.documentElement.classList.add("light");
    document.getElementById("moon-sun").src = "./img/luna.svg";
    isDark = false;
  } else {
    document.documentElement.classList.remove("light");
    document.getElementById("moon-sun").src = "./img/sun.svg";
    isDark = true;
  }
});


console.log('%cHola! 👋', 'font-size:24px;');
console.log('%cVeo que estas interesado en ver el codigo del sitio. Puedes ver el repo aqui: https://github.com/imjosehidalgo/practicas', 'font-size:20px');