/*
window.addEventListener("scroll", function(){
    if(window.pageYOffset>50){
        document.getElementById("advice").style.opacity = "0.0";
        document.getElementById("advice").style.transition = "0.5s";
    }
    else{
        document.getElementById("advice").style.opacity = "1.0";
        document.getElementById("advice").style.transition = "0.5s";
    }
});
*/
function toggleAppear(section){
    if(section.style.display=="none"){
        section.style.display = "block"
    }
    else{
        section.style.display="none";
    }
}

const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", move => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  //percent += (-percent)
  textPath.setAttribute("startOffset", (percent * 20) +5)
});