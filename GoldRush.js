class GoldRush extends Matrix{
    constructor(numRows, numColumns ){
        super(numRows, numColumns)
        this.player1 = {
            mark:1,
            score:0,
            x:0,
            y:0
        }
        this.player2 = {
            mark:2,
            score:0,
            x: numRows-1,
            y: numColumns-1
        }
        this.freeCells  = (this.numColumns * this.numRows) -2
        this.numWalls = 0
        this.coins = []
        this.numCoins = 10
        this.generateCoins(this.numCoins)
        this.setPlayers(this.player1,this.player2)
    }

    getRandom(num){
        return Math.floor(Math.random() * num)
    }
    getCoin(){
        let x = this.getRandom(this.numRows)
        let y = this.getRandom(this.numColumns)
        return {x,y}
    }
    coinAlreadyExist(coin){
        return this.coins.find(c => c.x == coin.x && c.y == coin.y)
    }
    isGoodLocation(newCoin){
        if(newCoin.x == this.player1.x && newCoin.y == this.player1.y){
            return false
        } else 
        if(newCoin.x == this.player2.x && newCoin.y == this.player2.y){
            return false
        }
        if(this.coinAlreadyExist(newCoin)){
            return false
        }
        return true
    }
    generateCoins(numCoins){
        while(this.coins.length < numCoins && this.coins.length < this.freeCells){
            let coin = this.getCoin()
            if(this.isGoodLocation(coin)){
                this.coins.push(coin)
            }
        }
    }

    setCoins(){
        this.coins.forEach(c =>{
            this.alter(c.x,c.y,"C")
        })
    }
    removeCoin(x,y){
        const coinIndex = this.coins.findIndex(c => (c.x == x && c.y == y ))
        this.coins.splice(coinIndex , 1)
        this.setCoins()
    }

    setPlayers(){
        this.generateMatrix(this.numRows ,this.numColumns)
        this.setCoins()
        this.alter(this.player1.x , this.player1.y , this.player1.mark)
        this.alter(this.player2.x , this.player2.y , this.player2.mark)
    }
    ifScores(player){
        let currentPlayer = this[`player${player}`]
        if(this.matrix[currentPlayer.x][currentPlayer.y] == "C"){
            this.removeCoin(currentPlayer.x,currentPlayer.y)
            currentPlayer.score += 10
        }
    }
    movePlayer(player,direction){
        let currentPlayer = this[`player${player}`]

        if(direction == "up"){
            if(currentPlayer.x > 0){
                currentPlayer.x--
            }
        }
        else if(direction == "right"){
            if(currentPlayer.y < this.numColumns -1 ){
                currentPlayer.y++
            }
        } 
        else if(direction == "down"){
            if(currentPlayer.x < this.numRows -1){
                currentPlayer.x++
            }
        } 
        else if(direction == "left"){
           if(currentPlayer.y > 0 ){     
                currentPlayer.y--
            }
        }
        this.ifScores(player)
        this.setPlayers()
    }
}