export default class Player {
    constructor(x = 0, y = 50, width = 32, height = 48, frameX = 0, frameY = 0, speed = 0, moving = false) {
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
    }
    update(context) {
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
    updateMovement(){
        this.x += this.speedX
        this.y += this.speedY
        if(this.x < 0){
            this.x = 0
        } else if(this.y < 0){
            this.y =0
        }
    }
}
