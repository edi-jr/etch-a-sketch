function createGrid() {
  const gridSize = sizeInput.value;
  container.textContent = "";
  sizeLabel.textContent = `Grid size: ${gridSize} x ${gridSize}`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    gridItem.addEventListener("mousedown", changeColor);
    container.appendChild(gridItem);
  }
}

function setPenColor() {
  penColor = colorInput.value;
}

function changeColor(e) {
  if(e.type === "mouseover" && mouseIsDown === false) return;
  e.target.style.backgroundColor = penColor;
}

const container = document.querySelector("#container");
const sizeInput = document.querySelector("#grid-size");
const sizeLabel = document.querySelector("#size-label");
const colorInput = document.querySelector("#pen-color");

let mouseIsDown = false;
let penColor = "#202020";

sizeInput.addEventListener("input", createGrid);
colorInput.addEventListener("input", setPenColor);
window.addEventListener("mousedown", () => mouseIsDown = true);
window.addEventListener("mouseup", () => mouseIsDown = false);
window.onload = createGrid();