console.debug('intializing...')
init()

const Tile = { // Tile state enumeration
    blank: "",
    x: "x",
    o: "o"
}

var board = [...Array(3)].map(e => Array(3)) // This makes an empty 3 x 3 2D array

function init() {
    console.debug(board)
    refreshBoard(board)
}

function refreshBoard(board) {
    var currentRowIndex = 0
    board.forEach( (row) => {
        const rowElement = document.createElement('div').setAttribute('id', `row-${currentRowIndex}`)
        document.getElementById('tic-tac-toe-board').appendChild(rowElement)
        var currentCellIndex = 0
        row.forEach( (cell) => {
            createCell(cell, currentCellIndex, `row-${currentRowIndex}`)
            currentCellIndex++
        })
        currentRowIndex++
    })
}

function createCell(cell, cellIndex, rowId) {
    const cellElement = document.createElement('div').setAttribute('class', `cell-${cellIndex}`)
    document.getElementById(rowId).appendChild(cellElement)
}