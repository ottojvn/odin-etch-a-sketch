function updateRangeText(gridSize) {
  const rangeValue = document.querySelector("#rangeValue");
  rangeValue.textContent = `${gridSize}x${gridSize}`;
}

function populateGrid(gridSize) {
  board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  clearChildren(board);
  for (let i = 0, size = gridSize * gridSize; i < size; ++i) {
    let square = document.createElement("div");

    square.style.borderWidth = "1px";
    square.addEventListener(
      "mousedown",
      () => (square.style.backgroundColor = getActiveColor())
    );

    square.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        square.style.backgroundColor = getActiveColor();
      }
    });

    square.addEventListener(
      "mouseenter",
      () => (square.style.borderStyle = "solid")
    );

    square.addEventListener(
      "mouseleave",
      () => (square.style.borderStyle = "none")
    );

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

function setActiveColor() {
  color = this.id;
}

function getActiveColor() {
  if (color == "colorful") {
    return getRandomColor();
  } else if (color == "erase") {
    return "white";
  } else {
    return "black";
  }
}

function getRandomColor() {
  var makeColorCode = "0123456789ABCDEF";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }
  return code;
}

const board = document.querySelector("#board");
const colorButtons = document.querySelectorAll("#controlPanel > button");
const sliderInput = this.document.querySelector("#slider > input");
// sliderInput.value should be [2, 64] (this range is set in the HTML file)
sliderInput.value = 16;
let color = "black";

sliderInput.addEventListener("input", updateGrid);
colorButtons.forEach((button) =>
  button.addEventListener("click", setActiveColor)
);

updateGrid();
