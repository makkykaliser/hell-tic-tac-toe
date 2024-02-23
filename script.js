const Tile = { // Tile state enumeration
    blank: "",
    x: "x",
    o: "o"
}

var board = initializeBoard(3)
var turn = Tile.x

console.debug('intializing...')
init()

function init() {
    importFonts()
    console.debug(board)
    refreshBoard(board)
}

function importFonts() { // This is the same thing as just declaring them in the raw html, but programmatically
    const googleFonts = document.createElement('link')
    googleFonts.setAttribute('rel', 'preconnect')
    googleFonts.setAttribute('href', 'https://fonts.googleapis.com')

    const gStatic = document.createElement('link')
    gStatic.setAttribute('rel', 'preconnect')
    gStatic.setAttribute('href', 'https://fonts.gstatic.com')
    gStatic.setAttribute('crossorigin', '') // making the value blank sets this to true for some reason

    const roboto = document.createElement('link')
    roboto.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
    roboto.setAttribute('rel', 'stylesheet')

    const ibmPlexSans = document.createElement('link')
    ibmPlexSans.setAttribute('href', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap')
    ibmPlexSans.setAttribute('rel', 'stylesheet')

    document.head.append(googleFonts)
    document.head.append(gStatic)
    document.head.append(roboto)
    document.head.append(ibmPlexSans)
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
        rowElement.setAttribute('class', 'row')
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
    const cellElement = document.createElement('div')
    cellElement.setAttribute('id', `cell-${rowId}-${cellIndex}`)
    cellElement.setAttribute('class', 'cell')
    const onClick = () => {
        play(rowId, cellIndex)
    }
    cellElement.addEventListener('click', onClick, {once: true})
    document.getElementById(rowId).append(cellElement)
}

function play(row, col) {
    console.debug(`it worked ${row} ${col}`)
    const piece = document.createElement('span')
    piece.setAttribute('class', 'occupied-cell')
    piece.innerHTML = turn
    const cell = document.getElementById(`cell-${row}-${col}`)
    cell.append(piece)
    turn = turn == Tile.x ? Tile.o : Tile.x
}