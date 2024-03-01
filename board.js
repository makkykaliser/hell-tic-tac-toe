import { Player } from "./enumerations"
import { Gameplay } from "./gameplay"

export class Board {
    
    constructor(size) {
        this.size = size
        this.grid = this.initialize(size)
    }

    initialize() {
        var boardResult = []
        for (var i = 0; i < this.size; i++) {
            boardResult[i] = []
            for (var j = 0; j < this.size; j++) {
                boardResult[i][j] = Player.none
            }
        }
        return boardResult
    }

    refreshBoard() {
        var currentRowIndex = 0
        this.grid.forEach( (row) => {
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

    createCell(cell, cellIndex, rowId) {
        const cellElement = document.createElement('div')
        cellElement.setAttribute('id', `cell-${rowId}-${cellIndex}`)
        cellElement.setAttribute('class', 'cell')
        const onClick = () => {
            Gameplay.play(rowId, cellIndex)
        }
        cellElement.addEventListener('click', onClick, {once: true})
        document.getElementById(rowId).append(cellElement)
    }
}