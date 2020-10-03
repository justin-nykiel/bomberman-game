export default class Baddie {
    constructor(game, x = 0, y = 50, width = 50, height = 50, frameX = 0, frameY = 0, speed = 0, moving = false) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.frameX = frameX
        this.frameY = frameY
        this.speedY = 5
        this.maxSpeed = 5
        this.img = document.getElementById('baddie')
        this.game = game
        this.arrayLocation = 8
        this.ded = false
        // from https://untamed.wild-refuge.net/rmxpresources.php?characters creator: sithjester
    }
    updateDrawing(context) {
        if(!this.ded){
            context.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 50, 50)
        }
    }
    handlePlayerFrame(){
        if(this.speedY < 0){
            this.frameY = 3
        }else{
            this.frameY = 0
        }
        if (this.frameX < 3 && this.moving === true){
            this.frameX++
        } else {
            this.frameX = 0
        }
    }
    
    
    updateMovement(){
        if(this.y < 1){
            this.speedY += this.maxSpeed
        }else if(this.y > 500){
            this.speedY -= this.maxSpeed
        } 

        if(this.x % 50===0 && this.y % 50 === 0){
            this.arrayLocation = (this.x/50 + this.y/50) + this.y/50 * 16
        }
        
        for(let i = 0; i < this.game.brick.length; i++){
            if(this.game.brick[this.arrayLocation + 17]){
                if(this.game.brick[this.arrayLocation + 17].status && this.speedY > 0 || this.x % 50 !== 0){
                    this.speedY = -this.maxSpeed
                }
            }
            if(this.game.brick[this.arrayLocation - 17]){
                if(this.game.brick[this.arrayLocation - 17].status && this.speedY < 0 || this.x % 50 !== 0){
                    this.speedY = this.maxSpeed
                }
            }
        }
        
        this.y += this.speedY
        
    }
}
