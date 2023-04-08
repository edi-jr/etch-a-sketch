function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
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
let mouseIsDown = false;
window.addEventListener("mousedown", () => mouseIsDown = true);
window.addEventListener("mouseup", () => mouseIsDown = false);
window.onload = createGrid(16);
