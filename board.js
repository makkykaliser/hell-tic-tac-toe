import { Player } from "./enumerations"
import { xIcon, oIcon } from "./util/icons"

export class Board {
    
    constructor(size, settings) {
        this.size = size
        this.grid = this.initialize(size)
        this.turn = Player.x
        this.settings = settings
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
            var currentColumnIndex = 0
            row.forEach( (cell) => {
                this.createCell(cell, currentColumnIndex, currentRowIndex, `row-${currentRowIndex}`)
                currentColumnIndex++
            })
            currentRowIndex++
        })
    }

    createCell(cell, colIndex, rowIndex, rowId) {
        const cellElement = document.createElement('div')
        cellElement.setAttribute('id', `cell-${rowIndex}-${colIndex}`)
        cellElement.setAttribute('class', 'cell')
        const onClick = () => {
            this.play(rowIndex, colIndex)
        }
        cellElement.addEventListener('click', onClick, {once: true})
        document.getElementById(rowId).append(cellElement)
    }

    play(row, col) {
        this.grid[row][col] = this.turn
        console.debug(this.grid)
        console.debug(`it worked ${row} ${col}`)
        const piece = this.turn === Player.x ? xIcon(this.settings.xColor) : oIcon(this.settings.oColor)
        const cell = document.getElementById(`cell-${row}-${col}`)
        cell.innerHTML = piece
        console.debug(this.turn)
        this.turn = this.turn === Player.x ? Player.o : Player.x
    }
}