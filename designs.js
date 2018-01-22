// Select color input

// Select size input
let size = document.getElementById('sizePicker');

let table = document.getElementById('pixel_canvas');

//make a eveny listener or onClick() on the submit button and (re)assign values for width and height

function makeGrid(gridHeight, gridWidth) {
    for (var y = 0; y < gridHeight; y++ ) {
        console.log("first loop works");
        let row = table.appendChild('tr');
        for (var x = 0; x < gridWidth; x++) {
            console.log("second loop works");
            row.appendChild('td');
        }
    }
};

size.addEventListener('submit', function() {
    let gridHeight = document.getElementById('input_height').value;
    let gridWidth = document.getElementById('input_width').value;
    makeGrid(gridHeight, gridWidth);
});

/*
let table = document.getElementById('pixel_canvas');

size.addEventListener('submit', function makeGrid() {

    console.log("haha");
});

/*
// When size is submitted by the user, call makeGrid()

function makeGrid() {

    let table = $('pixel_canvas');

    //create grid
    let tbody = table.appendChild('tbody');
    for (let y = 0; t < gridHeight; y++) {
        tbody.appendChild('tr');
        for (let x = 0; x < gridWidth; x++) {
            row.appendChild('td');
        }
    }


// Your code goes here!
*/
