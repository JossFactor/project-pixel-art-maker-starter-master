// variables for the table
let table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');

// function to make the table
function makeGrid(height, width) {
    table.innerHTML = '';
    // nested loop to create row and cell
    for (var x = 1; x <= height.value; x++) {
        let row = table.insertRow(x);
        for (var y = 1; y <= width.value; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', function (event) {
                event.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
}

// create the table when the submit button has been clicked
let sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid(height, width);
});
