const Tile = { // Tile state enumeration
    blank: "",
    x: "x",
    o: "o"
}

var board = initializeBoard(3)

console.debug('intializing...')
init()

function init() {
    console.debug(board)
    refreshBoard(board)
}

function initializeBoard(size) {
    var boardResult = []
    for (var i = 0; i < size; i++) {
        boardResult[i] = []
        for (var j = 0; j < size; j++) {
            boardResult[i][j] = Tile.blank
        }
    }
    return boardResult
}

function refreshBoard(board) {
    var currentRowIndex = 0
    board.forEach( (row) => {
        const rowElement = document.createElement('div')
        rowElement.setAttribute('id', `row-${currentRowIndex}`)
        console.debug(rowElement)
        document.getElementById('tic-tac-toe-board').append(rowElement)
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
    document.getElementById(rowId).append(cellElement)
}