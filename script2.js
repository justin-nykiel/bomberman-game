import Controls from '/controls.js'
import Player from '/player.js'
import Brick from '/bricks.js'
import Game from '/game.js'


const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
const GAME_WIDTH = 850
const GAME_HEIGHT = 550
let keys = []
canvas.width = 850
canvas.height = 550

//image used for playable character
const bomberman = new Image()
bomberman.src = 'ironman.png'
//image used for 
const stoneBrick = new Image()
stoneBrick.src = 'stoneBlock.png'



let goRight = true
let goDown = true
let goUp = true
let goLeft = true





let fps, fpsInterval, startTime, now, then, elapsed
function startAnimating(fps){
    fpsInterval = 1000/fps
    then = Date.now()
    startTime = then
    animate()
}
let game = new Game(GAME_WIDTH, GAME_HEIGHT)
game.start()
//Loop of the game
function animate(){
    requestAnimationFrame(animate)
    now = Date.now()
    elapsed = now - then
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval)
        context.clearRect(0,0, canvas.width, canvas.height)
       // drawBreakableBricks()
       // drawBricks()
        game.update(context)
        game.draw(context)
        //collisionDetection()
    }
    
}

startAnimating(15)

