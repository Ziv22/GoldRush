class Renderer{
    constructor(){
    }
    renderBoard(board){
        const source    = $("#board-template").html()
        const template  = Handlebars.compile(source) 
        const toAppend  = template({board})
        $("#board-conatainer").empty().append(toAppend)
    }
}

