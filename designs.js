$(document).ready(function() {
	// Select color input
	// Select size input

	const submit = $(':submit');

	const gridTable = $('#pixel_canvas');

	submit.click(function(event) {
		event.preventDefault();
		const gridHeight = parseInt($('#input_height').val());
		const gridWidth = parseInt($('#input_width').val());
		makeGrid(gridHeight, gridWidth);
	});

	// When size is submitted by the user, call makeGrid()

	function makeGrid(gridHeight, gridWidth) {
		let grid;
		for (let x = 0; x < gridWidth; ++x) {
			grid += '<tr></tr>';
			for (let y = 0; y < gridHeight; y++) {
				grid += '<td></td>';
			}
		}
		gridTable.html(grid);
	}
})