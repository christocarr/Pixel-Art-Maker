$(document).ready(function() {
	// Select color input
	// Select size input

	const SUBMIT = $(':submit');
	const GRID_LIMIT = 30;
	const GRID_TABLE = $('#pixel_canvas');

	SUBMIT.click(function(event) {
		event.preventDefault();
		const GRID_HEIGHT = parseInt($('#input_height').val());
		const GRID_WIDTH = parseInt($('#input_width').val());
		makeGrid(GRID_HEIGHT, GRID_WIDTH);
	});

	// When size is submitted by the user, call makeGrid()

	function makeGrid(GRID_HEIGHT, GRID_WIDTH) {
		let grid;
		
		if (GRID_HEIGHT <= GRID_LIMIT && GRID_WIDTH <= GRID_LIMIT){
			
			for (let x = 0; x < GRID_WIDTH; ++x) {
				grid += '<tr>';
				for (let y = 0; y < GRID_HEIGHT; y++) {
					grid += '<td></td>';
				}
				grid += '</tr>'
			}
			GRID_TABLE.html(grid);
			
		} else { //warning to user grid is oversized
			GRID_TABLE.html('Grid height and width is 30 max!. Please adjust the input.');
		}
	}
	
	//set the background color of the table cell when 
	GRID_TABLE.on('mousedown', 'td', function(event){
		$(this).css('background-color', $('#colorPicker').val());
	});
							 
})