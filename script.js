import { importFonts } from "./util/fonts"
import { xIcon, oIcon } from "./util/icons"
import { Player } from "./enumerations"
import { Board } from "./board"

var board = Board(3)
var turn = Player.x

init()

function init() {
    importFonts()
    Board.initialize()
    Board.refreshBoard()
    console.debug(board)
}

