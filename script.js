let display = document.querySelector("#display");
let maxfontsize = 45;
let minfontsize = 15;

function adjustfontsize() {
  let fontsize = maxfontsize;
  while (display.scrollWidth > display.clientWidth && fontsize > minfontsize) {
    fontsize -= 1;
    display.style.fontSize = fontsize + "px";
  }
}
