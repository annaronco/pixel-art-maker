// Select color input
let color = document.getElementById('colorPicker').value;

// Select size input
let size = document.getElementById('sizePicker');

let table = document.getElementById('pixel_canvas');

// make a eveny listener or onClick() on the submit button and (re)assign values for width and height
// add event listener for a <td> in the loop
// add function to change the backgroundColor

function makeGrid(gridHeight, gridWidth) {
    for (var y = 0; y < gridHeight; y++) {
        let rowNode = document.createElement('tr');
        let row = table.appendChild(rowNode);
        for (var x = 0; x < gridWidth; x++) {
            let cellNode = document.createElement('td');
            let cell = row.appendChild(cellNode);
            cell.addEventListener('click', function(color) {
                cell.style.backgroundColor = color;
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
