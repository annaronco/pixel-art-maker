// Select size input
let size = document.getElementById('sizePicker');

// select table
let table = document.getElementById('pixel_canvas');

// make an event listener or onClick() on the submit button and (re)assign values for width and height
// add event listener for a <td> in the loop
// select color input
// add function to change the backgroundColor

function makeGrid(gridHeight, gridWidth) {
    for (var y = 0; y < gridHeight; y++) {
        let row = table.insertRow();
        for (var x = 0; x < gridWidth; x++) {
            let cell = row.insertCell();
            cell.addEventListener('mouseover', function() { // figure out how to listen to 2 events at the same time to drow when the mouse is pressed and dragged
                cell.addEventListener('mousedown', function() {
                    cell.style.backgroundColor = document.getElementById('colorPicker').value;
                });
            });
        }
    }
};

// on click on submit button get width and height and run makeGrid function

size.addEventListener('submit', function(event) {
    event.preventDefault();
    table.innerHTML = ' ';
    let gridHeight = document.getElementById('input_height').value;
    let gridWidth = document.getElementById('input_width').value;
    makeGrid(gridHeight, gridWidth);
});
