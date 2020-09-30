

import Controls from '/controls.js'
import Player from '/player.js'
import Brick from '/bricks.js'

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
    }
    start(){
        this.player = new Player
        new Controls(this.player)
        this.brick = new Brick()
        this.gameObjects = [this.ball, this.brick]
        let bricks = [];
        for(let c = 0; c < 8; c++){
            bricks[c] = []
            for(let r = 0; r < 5; r++) {
                bricks[c][r] = new Brick(50 + c * 100, r * 100 + 50);
            }
        }
        let flatBricks = [].concat.apply([],bricks)
        this.gameObjects = [this.player, ...flatBricks]
    }
    update(){
        this.player.updateMovement()
        this.player.handlePlayerFrame()
    }
    draw(context){
        //this.player.drawSprite(bomberman, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width, this.player.height, context)
        this.gameObjects.forEach(objects => objects.update(context))
    }
}