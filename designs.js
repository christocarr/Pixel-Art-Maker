$(document).ready(function() {
	// Select color input
	// Select size input

	const gridHeight = parseInt($('#input_height').val());
	const gridWidth = parseInt($('#input_width').val());

	const submit = $(':submit');

	const gridTable = $('#pixel_canvas');

	submit.click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		makeGrid();
	});

	// When size is submitted by the user, call makeGrid()

	function makeGrid() {
		console.log(gridHeight);
		for (let x = 1; x < gridWidth; x++) {
			for (let y = 1; y < gridHeight; y++) {
				//gridTable.append("<tr><td></td></tr>");
				$('.target').append('<div class="div"></div>');
			}
		}

	}
})