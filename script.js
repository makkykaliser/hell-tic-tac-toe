import { importFonts } from "./util/fonts"
import { Board } from "./board"
import { Settings } from "./settings"

function init() {
    importFonts()
    const settings = new Settings()
    settings.initialize()
    const board = new Board(3, settings)
    board.initialize()
    board.refreshBoard()
    console.debug(board)
}

init()
