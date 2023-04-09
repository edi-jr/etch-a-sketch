function createGrid() {
  const gridSize = sizeInput.value;
  container.textContent = "";
  sizeLabel.textContent = `Grid size: ${gridSize} x ${gridSize}`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.style.backgroundColor = "rgb(255, 255, 255)";
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    gridItem.addEventListener("mousedown", changeColor);
    container.appendChild(gridItem);
  }
}

function setPenColor(item) {
  if (rainbowButton.classList.contains("active")) {
    const randomR = Math.round(Math.random() * 256);
    const randomG = Math.round(Math.random() * 256);
    const randomB = Math.round(Math.random() * 256);
    penColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (darkenButton.classList.contains("active")) {
    penColor = darkenColor(item.style.backgroundColor);
  } else {
    penColor = colorInput.value;
  }
  return penColor;
}

function changeColor(e) {
  if (e.type === "mouseover" && mouseIsDown === false) return;
  e.target.style.backgroundColor = setPenColor(e.target);
}

function darkenColor(color) {
  let rgb = color
    .substring(4, color.length - 1)
    .replace(/ /g, "")
    .split(",");
  let r = rgb[0] - (255 * 1) / 10;
  let g = rgb[1] - (255 * 1) / 10;
  let b = rgb[2] - (255 * 1) / 10;
  return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

const container = document.querySelector("#container");
const sizeInput = document.querySelector("#grid-size");
const sizeLabel = document.querySelector("#size-label");
const colorInput = document.querySelector("#pen-color");
const rainbowButton = document.querySelector("#rainbow");
const darkenButton = document.querySelector("#darken");

let mouseIsDown = false;
let penColor = "#202020";

sizeInput.addEventListener("input", createGrid);
colorInput.addEventListener("input", setPenColor);
colorInput.addEventListener("click", () => {
  rainbowButton.classList.remove("active")
  darkenButton.classList.remove("active");
});
rainbowButton.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  darkenButton.classList.remove("active");
});
darkenButton.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  rainbowButton.classList.remove("active");
});
window.addEventListener("mousedown", () => (mouseIsDown = true));
window.addEventListener("mouseup", () => (mouseIsDown = false));
window.onload = createGrid();
