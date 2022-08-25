function updateRangeText(gridSize) {
  const rangeValue = document.querySelector("#rangeValue");
  rangeValue.textContent = `${gridSize}x${gridSize}`;
}

function populateGrid(gridSize) {
  board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  clearChildren(board);
  for (let i = 0; i < gridSize * gridSize; ++i) {
    let square = document.createElement("div");

    square.onclick = function () {
      this.style.backgroundColor = color;
    };

    board.insertAdjacentElement("beforeend", square);
  }

  return;
}

function clearChildren(element) {
  while (element.firstChild) {
    element.lastChild.remove();
  }
}

function updateGrid() {
  let gridSize = sliderInput.value;

  updateRangeText(gridSize);
  populateGrid(gridSize);
}

const board = document.querySelector("#board");
const sliderInput = this.document.querySelector("#slider > input");
let color = "black";

sliderInput.addEventListener("input", updateGrid);

updateGrid();
