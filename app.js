const GRID = {
	makeGrid: function(height, width) {
		let canvas = document.getElementById('pixel_canvas');
		let grid = '';
		for (let i = 0; i < height; i++) {
			grid += '<tr>';
			for (let j = 0; j < width; j++) {
				grid += '<td></td>';
			}
		}
		grid += '</tr>';
		canvas.innerHTML = grid;	
	}
};
	
const HANDLERS = {
	addGrid: function(event){
		event.preventDefault();
		let gridWidth = document.getElementById('input_width');
		let gridHeight = document.getElementById('input_height');
		gridHeight = gridHeight.valueAsNumber;
		gridWidth = gridWidth.valueAsNumber;
		GRID.makeGrid(gridHeight, gridWidth);
	},
};

window.onload = HANDLERS.addGrid;

//HANDLERS.colorInGrid();

