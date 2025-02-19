const container = document.querySelector(".container");
const CONT_WIDTH = 512;
const RGB_MIN = 0;
const RGB_MAX = 255;

createGrid(container, 16);

container.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.className === "square") {
    target.style["background-color"] = `rgb(${getRandomRGBValue()}, 
    ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
  };
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let numSquares = prompt("Enter number of squares for each dimension (max. 100).", 16);
  // Limit number of squares to 100 to avoid performance issues.
  if (numSquares > 100) {
    numSquares = 100;
  }
  deleteGrid(container);
  createGrid(container, numSquares);
});

function getRandomRGBValue() {
  return Math.floor(Math.random() * (RGB_MAX + 1));
}

function deleteGrid(gridContainer) {
  const squareList = document.querySelectorAll(".square");
  for (const square of squareList) {
    gridContainer.removeChild(square);
  }
}

function createGrid(gridContainer, numSquares) {
  const squareWidth = CONT_WIDTH / numSquares;
  const totalSquares = numSquares * numSquares;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.style.cssText = `width: ${squareWidth}px; height: ${squareWidth}px;`
    gridContainer.appendChild(square);
  }
}