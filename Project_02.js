function changecolor(color) {
  document.body.style.backgroundColor = color;
  updatecolorcode(color);
  addhistory(color);
}

function randomcolor() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r},${g},${b})`;
  changecolor(rgb);
}

function updatecolorcode(color) {
  document.getElementById("Colorcode").innerHTML = color;
}

function addhistory(color) {
  let box = document.createElement("div");
  box.style.backgroundColor = color;
  box.style.height = "30px";
  box.style.width = "30px";
  box.style.margin = "5px";
  box.style.display = "inline-block";
  box.style.cursor = "pointer";

  box.onclick = function () {
    changecolor(color);
  };
  document.getElementById("history").appendChild(box);
}
