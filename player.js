export default class Player {
    constructor(game, x = 0, y = 50, width = 40, height = 40, frameX = 0, frameY = 0, speed = 0, moving = false) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.frameX = frameX
        this.frameY = frameY
        this.speedY = speed
        this.speedX = speed
        this.moving = moving
        this.maxSpeed = 9
        this.img = document.getElementById('bomberman')
        this.game = game
        // from https://untamed.wild-refuge.net/rmxpresources.php?characters creator: sithjester
    }
    updateDrawing(context) {
        context.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
    }
    handlePlayerFrame(){
        if (this.frameX < 3 && this.moving === true){
            this.frameX++
        } else {
            this.frameX = 0
        }
    }
    moveDown(){
        this.speedY =  this.maxSpeed
        this.frameY = 0
        this.moving = true
    }
    moveUp(){
        this.speedY = -this.maxSpeed
        this.frameY = 3
        this.moving = true
    }
    moveLeft(){
        this.speedX = -this.maxSpeed
        this.frameY = 1
        this.moving = true
    }
    moveRight(){
        this.speedX = this.maxSpeed
        this.frameY = 2
        this.moving = true
    }
    stop(){
        this.speedX = 0
        this.speedY = 0
        this.moving = false
    }
    stopX(){
        this.speedX = 0
    }
    stopY(){
        this.speedY = 0
    }
    updateMovement(){
        this.upperRight = {x:this.x + this.width, y: this.y}
        this.upperLeft = {x:this.x, y:this.y}
        this.bottomRight = {x:this.x + this.width, y: this.y + this.height}
        this.bottomLeft = {x: this.x, y: this.y + this.height}
        let stopX = false
        let stopY = false
        for(let i = 0; i < this.game.brick.length; i++){
            if(this.upperRight.x > this.game.brick[i].x && this.upperRight.y > this.game.brick[i].y -5 && this.upperRight.y < this.game.brick[i].y + this.game.brick[i].height){
                this.stopX()
                break
            }else if(this.upperRight.y < this.game.brick[i].y + this.game.brick[i].height && this.upperRight.x > this.game.brick[i].x + 5 && this.upperRight.x < this.game.brick[i].x + this.game.brick[i].width){
                this.stopY()
                break
            }else if(this.bottomLeft.x < this.game.brick[i].x + this.game.brick[i].width && this.bottomLeft.y > this.game.brick[i].y + 5 && this.bottomLeft.y < this.game.brick[i].y + this.game.brick[i].height){
                this.stopX()
                break
            }else if(this.bottomLeft.y > this.game.brick[i].y && this.x > this.game.brick[i].x && this.x < this.game.brick[i].x + this.game.brick[i].width - 5){
                this.stopY()
                break
            }
        }
        
        this.x += this.speedX
        this.y += this.speedY
        if(this.x < 0){
            this.x = 0
        } else if(this.y < 0){
            this.y =0
        } else if(this.x > this.game.gameWidth - this.width){
            this.x = this.game.gameWidth - this.width
        } else if(this.y > this.game.gameHeight - this.height){
            this.y = this.game.gameHeight - this.height
        }
    }
}
