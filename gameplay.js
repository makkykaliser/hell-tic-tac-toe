import { Player } from "./enumerations"

export default class Gameplay {
    constructor() {
        this.turn = Player.x
    }

    play(row, col) {
        console.debug(`it worked ${row} ${col}`)
        const piece = document.createElement('span')
        piece.setAttribute('class', 'occupied-cell')
        piece.innerHTML = turn
        const cell = document.getElementById(`cell-${row}-${col}`)
        cell.append(piece)
        turn = turn == Player.x ? Player.o : Player.x
    }
}