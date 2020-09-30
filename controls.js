export default class Controls {
    constructor(player){
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