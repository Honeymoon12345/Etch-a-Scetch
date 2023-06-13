"use strict";

const drawpad = document.getElementById("drawpad");
const button = document.getElementById("reset");

function raster(size = 16) {
  let gridSize = size * size;
  drawpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    drawpad.appendChild(div);
    div.classList.add("box");
    div.style.width = `${1000 / size}px`;
    div.style.height = `${1000 / size}px`;
  }
  farbeAendern();
}

raster();

function farbeAendern() {
  let red = 0;
  let green = 0;
  let blue = 0;
  const boxes = document.querySelectorAll(".box");
  for (let div of boxes) {
    div.addEventListener("mouseover", () => {
      red = Math.floor(Math.random() * 255);
      green = Math.floor(Math.random() * 255);
      blue = Math.floor(Math.random() * 255);
      div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  }
}

button.addEventListener("click", () => {
  let gritSize = +prompt("Bitte die Grit Größe eingeben!");
  if (gritSize >= 101) {
    gritSize = +prompt("Bitte eine Zahl bis 100 eingeben!");
  }
  clear();
  raster(gritSize);
});

function clear() {
  drawpad.innerHTML = "";
}
