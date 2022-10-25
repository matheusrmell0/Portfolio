// ANIMAÇÃO SCRIPT MANUAL
window.addEventListener("scroll", scrolling);
function scrolling(event) {
  if (matchMedia("(max-width: 1180px)").matches && window.scrollY > 1540) {
    document.querySelector(".footer > p").innerHTML =
      "Disponível para novos projetos. Entre em contato e marcamos uma conversa.";
  } else {
    document.querySelector(".footer > p").innerHTML =
      "Disponível para novos projetos.<br>Entre em contato e marcamos uma conversa.";
  }
  if (window.scrollY >= 130) {
    document.querySelector(".exp-project-data1").classList.add("opacity-1-left");
  }else if(window.scrollY >= 0){
    document.querySelector(".exp-project-data1").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 250) {
    document.querySelector(".exp-project-data2").classList.add("opacity-1-left");
  }else if(window.scrollY >= 190){
    document.querySelector(".exp-project-data2").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 400) {
    document.querySelector(".exp-project-data3").classList.add("opacity-1-left");
  }else if(window.scrollY >= 360){
    document.querySelector(".exp-project-data3").classList.add("opacity-1-left");
  }
  else if(window.scrollY >= 180){
    document.querySelector(".exp-project-data3").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 765) {
    document.querySelector(".graduation-courses-1").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 770) {
    document.querySelector(".graduation-courses-2").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 775) {
    document.querySelector(".graduation-courses-3").classList.add("opacity-1-left");
  } 
  if (window.scrollY >= 1650) {
    document.querySelector(".footer ul").classList.add("opacity-1-left");
  }else if(window.scrollY >= 1840){
    document.querySelector(".footer ul").classList.add("opacity-1-left");
  }else if(window.scrollY >= 2015){
    document.querySelector(".footer ul").classList.add("opacity-1-left");
  }else if(window.scrollY >= 2190){
    document.querySelector(".footer ul").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 1680) {
    document.querySelector(".footer p").classList.add("opacity-1-right");
  }else if(window.scrollY >= 1890){
    document.querySelector(".footer p").classList.add("opacity-1-right");
  }else if(window.scrollY >= 2060){
    document.querySelector(".footer p").classList.add("opacity-1-right");
  }else if(window.scrollY >= 2250){
    document.querySelector(".footer p").classList.add("opacity-1-right");
  }
  if (matchMedia("(max-width: 1250px)").matches) {
    document.querySelector(".graduation-content").classList.remove("container-2");
    document.querySelector(".graduation-content").classList.add("container");
    if (window.scrollY >= 1480) {
      document.querySelector(".footer p").classList.add("opacity-1-right");}
      if (window.scrollY >= 1450) {
        document.querySelector(".footer ul").classList.add("opacity-1-left");
      }
  }
  if (matchMedia("(max-width: 1035px)").matches) {
    if (window.scrollY >= 1430) {
      document.querySelector(".footer p").classList.add("opacity-1-right");}
      if (window.scrollY >= 1380) {
        document.querySelector(".footer ul").classList.add("opacity-1-left");
      }
  }
  if (matchMedia("(max-width: 1000px)").matches) {
    if (window.scrollY >= 1400) {
      document.querySelector(".footer p").classList.add("opacity-1-right");}
      if (window.scrollY >= 1350) {
        document.querySelector(".footer ul").classList.add("opacity-1-left");
      }
  }
  if (matchMedia("(max-width: 985px)").matches) {
    if (window.scrollY >= 1300) {
      document.querySelector(".footer p").classList.add("opacity-1-right");}
      if (window.scrollY >= 1250) {
        document.querySelector(".footer ul").classList.add("opacity-1-left");
      }
  }
  if (matchMedia("(max-width: 865px)").matches) {
    if (window.scrollY >= 1250) {
      document.querySelector(".footer p").classList.add("opacity-1-right");}
      if (window.scrollY >= 1200) {
        document.querySelector(".footer ul").classList.add("opacity-1-left");
      }
  }
  if (matchMedia("(max-width: 800px)").matches) {
    if (window.scrollY >= 1200) {
      document.querySelector(".footer p").classList.add("opacity-1-right");}
      if (window.scrollY >= 1150) {
        document.querySelector(".footer ul").classList.add("opacity-1-left");
      }
  }
  if (matchMedia("(max-width: 985px)").matches) {
    document.querySelector(".graduation-courses-1").classList.remove("opacity-0");
    document.querySelector(".graduation-courses-2").classList.remove("opacity-0");
    document.querySelector(".graduation-courses-3").classList.remove("opacity-0");
    document.querySelector(".graduation-courses").classList.remove("left20px");
    document.querySelector(".graduation-complement").classList.remove("right20px", "container-2");
    document.querySelector(".graduation-complement").classList.add("container");
  }
  if (matchMedia("(max-width: 650px)").matches){
    document.querySelector(".footer p").classList.remove("opacity-0");
    document.querySelector(".footer ul").classList.remove("opacity-0");
}
}
//

// ANIMAÇÃO (PLUGIN)
if (document.getElementById("index")){
if (window.SimpleAnime) {
  new SimpleAnime();
}
}
//

// REFRESH TIME
if (document.getElementById("index")) {
  setTime(0);
  var updateDelay = 1;
  function setTime() {
    var date = new Date();
    timestamp = date.getTime();
  }
    function updateLastRefreshTime() {
      var currentDate = new Date();
      var currentTime = currentDate.getTime();
      var timeSince = Math.floor((currentTime - timestamp) / 1000);
      let timeStampDescription = "";

      timeStampDescription = timeSince;
      const refresh = timeStampDescription;

      if (matchMedia("(min-width: 1250px)").matches && refresh > 2){
        document.querySelector(".exp-project-data1").classList.add("opacity-1-left");
        document.querySelector(".exp-project-data2").classList.add("opacity-1-left");
        document.querySelector(".exp-project-data3").classList.add("opacity-1-left");
      }
      if (matchMedia("(max-width: 1250px)").matches && refresh > 0){
        document.querySelector(".exp-project-data1").classList.add("opacity-1-left");
          document.querySelector(".graduation-content").classList.remove("container-2");
          document.querySelector(".graduation-content").classList.add("container");
      }
      if (matchMedia("(max-width: 975px)").matches && refresh > 0){
        document.querySelector(".exp-project-data2").classList.add("opacity-1-left");
      }
      if (matchMedia("(max-width: 770px)").matches && refresh > 1){
        document.querySelector(".exp-project-data3").classList.add("opacity-1-left");
      }
    }
  setInterval(updateLastRefreshTime, updateDelay);
}
//

console.log("❤ ✔ By Mello 😃");
