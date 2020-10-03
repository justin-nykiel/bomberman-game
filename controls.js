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
                case 32:
                    while(!game.bombPlaced){
                        game.bomb.x = game.player.x
                        game.bomb.y = game.player.y
                        game.bombPlaced = true
                    }
                    break
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