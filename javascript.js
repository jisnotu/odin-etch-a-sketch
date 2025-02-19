const container = document.querySelector(".container");
const CONT_WIDTH = 512;

createGrid(container, 16);

container.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.className === "square") {
    target.classList.add("hovered");
  };
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let numSquares = prompt("Enter number of squares for each dimension.", 16);
  console.log(numSquares);
});

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