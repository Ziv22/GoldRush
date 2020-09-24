const board = new GoldRush(6 ,6)
const Render = new Renderer()
const keyBoard = {
    87: {key: 'w', direction: 'up', player:1}, 
    65: {key: 'a', direction: 'left', player:1}, 
    83: {key: 's', direction: 'down', player:1}, 
    68: {key: 'd', direction: 'right', player:1}, 
    38: {key: 'up-arrow', direction: 'up', player:2}, 
    37: {key: 'left-arrow', direction: 'left', player:2}, 
    40: {key: 'down-arrow', direction: 'down', player:2}, 
    39: {key: 'right-arrow', direction: 'right', player:2}
}

Render.renderBoard(board.matrix)
window.addEventListener("keydown", event => {
    if (event.isComposing || keyBoard[event.keyCode]) {
        board.movePlayer(keyBoard[event.keyCode].player, keyBoard[event.keyCode].direction)
        Render.renderBoard(board.matrix)
    }
});


