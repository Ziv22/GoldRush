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

Handlebars.registerHelper("classifizer" , function(value){
    let elm = ""
    if(value == 1 || value == 2  ){
        elm += `<div class="player${value}"><i class="fas fa-user-ninja fa-2x"></i></div>`
    }else if(value == "C"){
        elm += `<div class="coin"><i class="fas fa-gem fa-lg"></i></div>`
    } else if(value == "W"){
        elm += `<div class="wall"></div>`
    } else {
        elm += ""
    }
    return new Handlebars.SafeString(elm)
})