function changeImage(element) {
  var natur1 = "natur1.jpg";
  var natur2 = "natur2.jpg";
  element.src = element.bln ? natur1 : natur2;
  element.bln = !element.bln;
}
function bigImg(x) {
    x.style.height = "100%";
    x.style.width = "100%";
}

function normalImg(x) {
    x.style.height = "50%";
    x.style.width = "50%";
}
