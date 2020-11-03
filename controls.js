export default class Controls {
    constructor(player, game){
        document.addEventListener('keydown',(e)=>{
            if(game.gamestate == 1){
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
                        while(!game.bombPlaced && !game.bomb.exploding){
                            game.bomb.placeBomb()
                            game.bombPlaced = true
                        }
                        break
                }
            }            
            if(e.keyCode == 27){
                console.log('paused')
                game.pause()
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