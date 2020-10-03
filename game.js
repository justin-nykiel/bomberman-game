

import Controls from './controls.js'
import Player from './player.js'
import Bomb from './bomb.js'
import Baddie from './frenemies.js'
import {levelBuilder, level1} from './levels.js'



export default class Game {
    constructor(gameWidth, gameHeight, context) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.context = context
        this.bombPlaced = false
        this.frames = 0
        this.explosion = false
        this.win = false
        
    }
    //initializes the game objects for start of game
    start(){
        this.player = new Player(this)
        this.bomb = new Bomb(this)
        new Controls(this.player, this)
        this.baddie = new Baddie(this, 400, 0)
    
        let bricks = levelBuilder(this, level1)
        //flattens 2d array of brick objexts to 1d array
        let flatBricks = [].concat.apply([],bricks)
        this.brick = flatBricks
        this.gameObjects = [this.player, ...flatBricks, this.baddie]
    }
    //updates all of the game objects properities 
    update(){
        this.player.updateMovement(this, level1)
        this.player.handlePlayerFrame()
        if(this.explosion){
            this.bomb.handleExplosionFrame(this, level1)
        }
        this.baddie.updateMovement()
        this.baddie.handlePlayerFrame()
    }
    //updates the entire game board and all the game objects by repainting the board every frame
    draw(context){
        //this.player.drawSprite(bomberman, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width, this.player.height, context)
            
        this.gameObjects.forEach(objects => objects.updateDrawing(context))
        if(this.player.ded){
            context.rect(0,0, this.gameWidth, this.gameHeight)
            context.fillStyle = "black"
            context.fill()
            context.font = '60px arial'
            context.fillStyle = 'white'
            context.textAlign = 'center'
            context.fillText('Game Over', this.gameWidth/2, this.gameHeight/2)
        }else if(this.win){
            context.rect(0,0, this.gameWidth, this.gameHeight)
            context.fillStyle = "black"
            context.fill()
            context.font = '60px arial'
            context.fillStyle = 'white'
            context.textAlign = 'center'
            context.fillText('YOU WIN', this.gameWidth/2, this.gameHeight/2)
        }else if(this.bombPlaced){
            this.bomb.updateDrawing(context)
        } else if(this.explosion){
            this.bomb.explode(context)
        }
        context.font = '14px arial'
        context.fillStyle = 'white'
        context.fillText('Finish ->', 775, 25)
    }
}