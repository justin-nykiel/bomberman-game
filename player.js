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
        this.maxSpeed = 10
        this.img = document.getElementById('bomberman')
        this.game = game
        this.arrayLocation = 17
        this.ded = false
        // from https://untamed.wild-refuge.net/rmxpresources.php?characters creator: sithjester
    }
    //repaints the player object, is called in the game.draw
    updateDrawing(context) {
        context.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 50, 50)
    }
    //updates the frame properties of the player so when paintinng will change sprite for animation
    handlePlayerFrame(){
        if (this.frameX < 3 && this.moving === true){
            this.frameX++
        } else {
            this.frameX = 0
        }
    }
    //move functions called on keydown of the arrow keys, moves player in that direction
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
        //checks for edges of the screen
        if(this.x < 0){
            this.x = 0
        } else if(this.y < 0){
            this.y = 0
        } else if(this.x > this.game.gameWidth - 41 && this.y < 25 && this.game.baddie.ded){
            this.game.win = true
            
        }else if(this.x > this.game.gameWidth - 50){
            this.x = this.game.gameWidth - 50
            
        } else if(this.y > this.game.gameHeight - 50){
            this.y = this.game.gameHeight - 50
            
        }
        //collision detection, give player an array location and compare to indices adjacent to it, if brick there, can't move there
        if(this.x % 50===0 && this.y % 50 === 0){
            this.arrayLocation = (this.x/50 + this.y/50) + this.y/50 * 16
        }
        
        for(let i = 0; i < this.game.brick.length; i++){
            if(this.game.brick[this.arrayLocation + 1]){
                if(this.game.brick[this.arrayLocation + 1].status && this.speedX > 0 || this.y % 50 !== 0){
                    this.speedX = 0
                }
            } 
            if(this.game.brick[this.arrayLocation - 1]){
                if(this.game.brick[this.arrayLocation - 1].status && this.speedX < 0 || this.y % 50 !== 0){
                    this.speedX = 0
                }
            }
            if(this.game.brick[this.arrayLocation + 17]){
                if(this.game.brick[this.arrayLocation + 17].status && this.speedY > 0 || this.x % 50 !== 0){
                    this.speedY = 0
                }
            }
            if(this.game.brick[this.arrayLocation - 17]){
                if(this.game.brick[this.arrayLocation - 17].status && this.speedY < 0 || this.x % 50 !== 0){
                    this.speedY = 0
                }
            }
        }
        //checks if player collides with a baddie, makes player ded if so
        if(!this.game.baddie.ded){
            if(this.x < this.game.baddie.x + this.game.baddie.width && this.x > this.game.baddie.x && this.y < this.game.baddie.y + this.game.baddie.height && this.y > this.game.baddie.y || this.x + this.width > this.game.baddie.x && this.x + this.width < this.game.baddie.x + this.game.baddie.width && this.y < this.game.baddie.y + this.game.baddie.height && this.y > this.game.baddie.y || 
                this.x < this.game.baddie.x + this.game.baddie.width && this.x > this.game.baddie.x && this.y + this.height > this.game.baddie.y  && this.y + this.height < this.game.baddie.y + this.game.baddie.height || this.x + this.width > this.game.baddie.x && this.x + this.width < this.game.baddie.x + this.game.baddie.width && this.y + this.height > this.game.baddie.y && this.y + this.height < this.game.baddie.y + this.game.baddie.height){
                this.ded = true
            }
        }
        //updates player location based on where moving 
        this.x += this.speedX
        this.y += this.speedY

        //make you get to corner easier
        if(this.speedX === 0){
            if((this.x + 10) % 50 === 0){
                this.x += 10
            }else if((this.x - 10) % 50 === 0){
                this.x -= 10
            }
        }
        if(this.speedY === 0){
            if((this.y + 10) % 50 === 0){
                this.y += 10
            }else if((this.y -10) % 50 === 0){
                this.y -= 10
            }
        }
    }
}
