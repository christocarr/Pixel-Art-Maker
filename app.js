const GRID = {
	makeGrid: function(height, width) {
		let canvas = document.getElementById('pixel_canvas');
		let grid = '';
		for (let i = 0; i < height; i++) {
			grid += '<tr>';
			for (let j = 0; j < width; j++) {
				grid += '<td class="cell"></td>';
			}
		}
		grid += '</tr>';
		canvas.innerHTML = grid;	
	},
	cellColor: function() {
		let color = document.getElementById('colorPicker').value;
		return color;
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
		
	}
	
};

window.onload = HANDLERS.addGrid;


