const sliderInput = this.document.querySelector("#slider > input");
let gridSize = sliderInput.value;

function updateRangeText(gridSize) {
  const rangeValue = document.querySelector("#rangeValue");
  rangeValue.textContent = `${gridSize}x${gridSize}`;
}

function updateGrid() {
  let gridSize = this.value;
  updateRangeText(gridSize);
}

sliderInput.addEventListener("input", updateGrid);
