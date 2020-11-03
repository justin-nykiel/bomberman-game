

import Controls from './controls.js'
import Player from './player.js'
import Bomb from './bomb.js'
import Baddie from './frenemies.js'
import {levelBuilder, level1} from './levels.js'

const GAMESTATE = {
    PAUSED: 0,
    PLAYING: 1,
    MENU: 2
}

export default class Game {
    constructor(gameWidth, gameHeight, context) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.context = context
        this.bombPlaced = false
        this.frames = 0
        this.explosion = false
        this.win = false
        this.controls = false
        
    }
    //initializes the game objects for start of game
    start(){
        console.log("new game")
        this.gamestate = GAMESTATE.PLAYING
        this.player = new Player(this)
        this.bomb = new Bomb(this)
        // if(!this.controls){
        //     new Controls(this.player, this)
        //     this.controls = true
        // }
        this.baddie = new Baddie(this, 400, 0)
    
        let bricks = levelBuilder(this, level1)
        //flattens 2d array of brick objexts to 1d array
        let flatBricks = [].concat.apply([],bricks)
        this.brick = flatBricks
        this.gameObjects = [this.player, ...flatBricks, this.baddie]
    }
    //updates all of the game objects properities 
    update(){
        if(this.gamestate == GAMESTATE.PAUSED) return
        this.player.updateMovement(this, level1)
        this.player.handlePlayerFrame()
        if(this.bomb.exploding){
            this.bomb.handleExplosionFrame(this, level1)
        }
        this.baddie.updateMovement()
        this.baddie.handlePlayerFrame()
        if(this.bombPlaced){
            this.bomb.updateDrawing(this.context)
        } 
        if(this.bomb.exploding){
            this.bomb.explode(this.context)
         
        }
         //counts how many frames have passed since bomb placed, stops repainting bomb 
       if(this.bombPlaced == true && this.frames >= 0 || this.bomb.exploding){
        this.frames++
        if(this.frames === 45){
            this.bomb.explode(this.context)
            this.bombPlaced = false
            this.bomb.exploding = true
        } else if(this.frames > 55){
            this.bomb.exploding = false
            this.frames = 0
            this.bomb.frameX = 0
        }
   }
    }
    //updates the entire game board and all the game objects by repainting the board every frame
    draw(context){
            
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
        }
        if(this.bombPlaced){
            this.bomb.updateDrawing(this.context)
        } 
        if(this.bomb.exploding){
            this.bomb.explode(this.context)
         
        }
        
        context.font = '14px arial'
        context.fillStyle = 'white'
        context.fillText('Finish ->', 775, 25)
    
    }
    pause(){
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.PLAYING
        } else {
            this.gamestate = GAMESTATE.PAUSED
        }
        console.log(this.gamestate)
    }
}