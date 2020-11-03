export default class Controls {
    constructor(player, game){
        document.addEventListener('keydown',(e)=>{
            switch(e.keyCode){
                case 37:
                    player.moveLeft()
                    break
                case 39:
                    player.moveRight()
                    break
                case 40:
                    player.moveDown()
                    break
                case 38:
                    player.moveUp()
                    break
            }
            if(e.keyCode === 32){
                    //can only place a bomb if no bomb currently on the board, or exploding
                    while(!game.bombPlaced && !game.bomb.exploding){
                        game.bomb.placeBomb()
                        game.bombPlaced = true
                    }
            }
        })
        document.addEventListener('keyup',(e)=>{
            switch(e.keyCode){
                case 37:
                    
                        player.stop()
                   
                    break
                case 39:
                    
                        player.stop()
                    
                    break
                case 40:
                    
                        player.stop()
                    
                    break
                case 38:
                    
                        player.stop()
                    
                    break
            }
        })
    }
    
}