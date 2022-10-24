window.addEventListener("scroll", scrolling);

function scrolling(event) {
  if (matchMedia("(max-width: 1180px)").matches && window.scrollY > 1540) {
    document.querySelector(".footer > p").innerHTML =
      "Disponível para novos projetos. Entre em contato e marcamos uma conversa.";
  } else {
    document.querySelector(".footer > p").innerHTML =
      "Disponível para novos projetos.<br>Entre em contato e marcamos uma conversa.";
  }
}

// ANIMAÇÃO (PLUGIN)
if (window.SimpleAnime) {
  new SimpleAnime();
}
//

// ANIMAÇÃO SCRIPT MANUAL
window.addEventListener("scroll", scrolling);

function scrolling(event) {
  if (window.scrollY >= 130) {
    document.querySelector(".exp-project-data1").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 250) {
    document.querySelector(".exp-project-data2").classList.add("opacity-1-left");
  }
  if (window.scrollY >= 400) {
    document.querySelector(".exp-project-data3").classList.add("opacity-1-left");
  }
}

if (matchMedia("(max-width: 1150px)").matches) {
  document.querySelector(".exp-project-data1").classList.remove("opacity-0", "left20px");
  document.querySelector(".exp-project-data2").classList.remove("opacity-0", "left20px");
  document.querySelector(".exp-project-data3").classList.remove("opacity-0", "left20px");
  document.querySelector(".experience").classList.remove("container-2");
  document.querySelector(".experience").classList.add("container");
  console.log(document.querySelector(".exp-project-data1"));
}

//
console.log("❤ ✔ By Mello 😃");
