$(document).ready(function() {
	// Select color input
	// Select size input

	const submit = $(':submit');
	const gridLimit = 30;
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
		
		if (gridHeight <= gridLimit && gridWidth <= gridLimit){
			
			for (let x = 0; x < gridWidth; ++x) {
				grid += '<tr>';
				for (let y = 0; y < gridHeight; y++) {
					grid += '<td></td>';
				}
				grid += '</tr>'
			}
			gridTable.html(grid);
			
		} else {
			gridTable.html('Grid height and width is 30 max!. Please adjust the input.');
		}
	}
	
	const tableCell = $('.tableCell');
	
	gridTable.on('mousedown', function(event){
		event.stopPropagation;
		const color = $('#colorPicker').val();
	});
							 
})