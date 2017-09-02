'use strict'

const $colorPicker = document.getElementById("colorPicker")
let colorInput = $colorPicker.value;
const table = document.getElementById("pixel_canvas");
  console.log(colorInput)

// Listener to select color input
$colorPicker.addEventListener('input', function() {
  colorInput = $colorPicker.value;
  console.log(colorInput)
})

// Function to draw canvas
function makeGrid(event) {
  event.preventDefault();
  // Select size input
  let width= document.getElementById("input_width").value,
      height= document.getElementById("input_height").value;
  for (let row = 0; row < width; row++) {
    let newRow = table.insertRow();
      for (let cell= 0; cell < height; cell++ ) {
        let newCell = newRow.insertCell();
      }
  }

}
