'use strict'

// set global variables
const $colorPicker = document.getElementById("colorPicker");
const table = document.getElementById("pixel_canvas");
let colorInput = $colorPicker.value;

// add listener to select color input
$colorPicker.addEventListener('input', function() {
  colorInput = $colorPicker.value;
  console.log(colorInput)
})

// Draw canvas when dimenstions are submitted
function makeGrid(event) {
  // prevent page refresh on submit
  event.preventDefault();

  // get input data
  let width= document.getElementById("input_width").value,
      height= document.getElementById("input_height").value;

  // draw grid
  for (let row = 0; row < width; row++) {
    let newRow = table.insertRow();
      for (let cell= 0; cell < height; cell++ ) {

        // add new cell with listener to change color
        let newCell = newRow.insertCell();
        newCell.onclick = changeColor;
      }
  }

}

// change the color of the clicked cell to current color
function changeColor() {
  this.style.background = colorInput;
}
