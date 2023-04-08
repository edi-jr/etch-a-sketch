function createGrid() {
  const gridSize = input.value;
  container.textContent = "";
  inputLabel.textContent = `Grid size: ${gridSize} x ${gridSize}`;
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

function changeColor(e) {
  if(e.type === "mouseover" && mouseIsDown === false) return;
  e.target.style.backgroundColor = "black";
}

const container = document.querySelector("#container");
const input = document.querySelector("input");
const inputLabel = document.querySelector("#input-label");
let mouseIsDown = false;
input.addEventListener("input", createGrid);
window.addEventListener("mousedown", () => mouseIsDown = true);
window.addEventListener("mouseup", () => mouseIsDown = false);
window.onload = createGrid();