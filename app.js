const GRID = {
	gridHeight: function() {
		let gridHeight = document.getElementById('input_height');
		gridHeight = gridHeight.valueAsNumber;
		return gridHeight;
	},
	
	gridWidth: function() {
		let gridWidth = document.getElementById('input_width');
		gridWidth = gridWidth.valueAsNumber;
		return gridWidth;
	},
	
	gridCanvas: function() {
		const GRID_CANVAS = document.getElementById('pixel_canvas');
		return GRID_CANVAS;
	},
	
	makeGrid: function(height, width) {
		let grid = '';
		for (let i = 0; i < height; i++) {
			grid += '<tr>';
			for (let j = 0; j < width; j++) {
				grid += '<td class="cell"></td>';
			}
		}
		grid += '</tr>';
		GRID.gridCanvas().innerHTML = grid;
	},
	
	cellColor: function() {
		let color = document.getElementById('colorPicker').value;
		return color;
	}
};
	
const HANDLERS = {
	addGrid: function(event){
		event.preventDefault();

		GRID.makeGrid(GRID.gridHeight(), GRID.gridWidth());
		HANDLERS.colorGrid();
		
	},
	
	colorGrid: function() {
		let cells = document.getElementsByClassName('cell');
		for (let i = 0; i<= cells.length; i++) {
			cells[i].addEventListener('click', function() {
				cells[i].style.backgroundColor = GRID.cellColor();
			});
		}
	},
	
	clearGrid: function() {
		GRID.gridCanvas().style.backgroundColor = 'none';
	}
	
};

window.onload = HANDLERS.addGrid;


