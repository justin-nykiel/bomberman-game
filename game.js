

import Controls from '/controls.js'
import Player from '/player.js'
import Brick from '/bricks.js'
import Bomb from '/bomb.js'
import {levelBuilder, level1} from '/levels.js'

export default class Game {
    constructor(gameWidth, gameHeight, context) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.context = context
        this.bombPlaced = false
        this.frames = 0
        this.explosion = false
    }
    start(){
        this.player = new Player(this)
        this.bomb = new Bomb(this)
        new Controls(this.player, this)
        
        //creating all the bricks to be put on map
        // let bricks = [];
        // for(let c = 0; c < 8; c++){
        //     bricks[c] = []
        //     for(let r = 0; r < 5; r++) {
        //         bricks[c][r] = new Brick(this, 50 + c * 100, r * 100 + 50);
        //     }
        // }
        let bricks = levelBuilder(this, level1)
        //flattens 2d array of brick objexts to 1d array
        let flatBricks = [].concat.apply([],bricks)
        this.brick = flatBricks
        this.gameObjects = [this.player, ...flatBricks]
    }
    update(){
        this.player.updateMovement(this, level1)
        this.player.handlePlayerFrame()
        if(this.explosion){
            this.bomb.handleExplosionFrame(this, level1)
        }
    }
    draw(context){
        //this.player.drawSprite(bomberman, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width, this.player.height, context)
        this.gameObjects.forEach(objects => objects.updateDrawing(context))
        if(this.bombPlaced){
            this.bomb.updateDrawing(context)
        } else if(this.explosion){
            this.bomb.explode(context)
        }
    }
}