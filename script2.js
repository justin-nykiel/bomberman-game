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
new Controls(game.player, game)
//Loop of the game, updates if a gram has passed
function animate(){
    requestAnimationFrame(animate)
    now = Date.now()
    elapsed = now - then
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval)
        context.clearRect(0,0, canvas.width, canvas.height)
        
       
       
        game.update(context)
        game.draw(context)
        
        
    }
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    const restart = document.querySelector('#restart')
    restart.addEventListener('click', (e)=>{
        e.preventDefault()
        //removes focus from button after click, so next round when bomb is placed, restart button is not clicked.
        document.activeElement.blur()
        game.player.ded = false
        game.win = false
        game.start()
    })
})

startAnimating(15)
