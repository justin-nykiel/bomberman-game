import Controls from './controls.js'
import Player from './player.js'
import Brick from './bricks.js'
import Game from './game.js'



const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
const GAME_WIDTH = 850
const GAME_HEIGHT = 550
let keys = []
canvas.width = 850
canvas.height = 550

//sets fps, so that game loop only updates a certain amount of times per second
let  fpsInterval, now, then, elapsed
function startAnimating(fps){
    fpsInterval = 1000/fps
    then = Date.now()
    animate()
}
let game = new Game(GAME_WIDTH, GAME_HEIGHT, context)
game.start()
//Loop of the game, updates if a gram has passed
function animate(){
    requestAnimationFrame(animate)
    now = Date.now()
    elapsed = now - then
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval)
        context.clearRect(0,0, canvas.width, canvas.height)
        
        //counts how many frames have passed since bomb placed, stops repainting bomb after certain time frame
       if(game.bombPlaced == true && game.frames >= 0 || game.explosion){
            game.frames++
            if(game.frames === 45){
                game.bomb.explode(context)
                game.bombPlaced = false
                game.explosion = true
            } else if(game.frames === 55){
                game.explosion = false
                game.frames = 0
                game.bomb.frameX = 0
            }
       }
       
        game.update(context)
        game.draw(context)
        
        
    }
    
}

startAnimating(15)

