const container = document.querySelector(".container");

for (let i = 0; i < (16 * 16); i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  container.appendChild(square);
}

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