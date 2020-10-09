let isDark = false;

function sun(){
 document.getElementById("moon-sun").src="./img/sun.svg";
 document.getElementById("moon-sun").style.filter = "invert(0)";
 isDark = true;
}
function moon(){
  document.getElementById("moon-sun").src="./img/luna.svg";
  document.getElementById("moon-sun").style.filter = "invert(0)";
  isDark = false;
 }

document.querySelector(".plus").addEventListener("click", () => {
  document.querySelector(".form").classList.toggle("active");
  document.querySelector(".plus").classList.toggle("active");
});

 document.querySelector(".dark-mode").addEventListener("click", () => {
   /*
   document.documentElement.classList.toggle("dark");
   if (document.documentElement.classList == ""){
     moon();
    }else {
      sun();
    }
    */
   /*document.documentElement.classList.toggle("dark");
  if (document.getElementById("moon-sun").src === "./img/luna.svg") {
    moon();
  }else {
    sun();
  }*/
  if (isDark) {
    sun();
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    console.log('ahora es oscuro')
  }else {
    moon();
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    console.log('ahora es luz')
  }
 });

 console.log(window.matchMedia('prefers-color-scheme: dark'));
 
 if (!window.matchMedia('prefers-color-scheme: dark')) {
   sun();
   console.log('dark y muestro el sol')
  }else {
    moon();
    console.log('light y muestro la luna')
  }
  console.log(isDark);