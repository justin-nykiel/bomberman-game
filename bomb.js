export default class Bomb {
    constructor(game){
        this.game = game
        this.x = this.game.player.x
        this.y = this.game.player.y + this.game.player.height/2
        this.image = document.getElementById('bomb')
        this.width = 40
        this.height = 40
        this.explosion = document.getElementById('explosion')
        this.frameX = 0
    }
    updateDrawing(context){
        context.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height,
        )

    }
    explode(context){
        this.explosionW = 100
        this.explosionH = 99
        context.drawImage(this.explosion, this.explosionW * this.frameX, 0, this.explosionW, this.explosionH, this.x - 20, this.y - 20, this.explosionW, this.explosionH)
    }
    handleExplosionFrame(){
        if (this.frameX < 9 && this.game.explosion === true){
            this.frameX++
        }
      
        if(this.x % 50===0 && this.y % 50 === 0){
            this.arrayLocation = (this.x/50 + this.y/50) + this.y/50 * 16
        }
        
        for(let i = 0; i < this.game.brick.length; i++){
            if(this.game.brick[this.arrayLocation + 1]){
                if(this.game.brick[this.arrayLocation + 1].breakable){
                    this.game.brick[this.arrayLocation + 1].status = false
                }
            } 
            if(this.game.brick[this.arrayLocation - 1]){
                if(this.game.brick[this.arrayLocation - 1].breakable){
                    this.game.brick[this.arrayLocation - 1].status = false
                }
            }
            if(this.game.brick[this.arrayLocation + 17]){
                if(this.game.brick[this.arrayLocation + 17].breakable){
                    this.game.brick[this.arrayLocation + 17].status = false
                }
            }
            if(this.game.brick[this.arrayLocation - 17]){
                if(this.game.brick[this.arrayLocation - 17].breakable){
                    this.game.brick[this.arrayLocation - 17].status = false
                }
            }
        }
        //collision with baddie
        if(this.arrayLocation === this.game.baddie.arrayLocation || this.arrayLocation + 1 === this.game.baddie.arrayLocation || this.arrayLocation + 17 === this.game.baddie.arrayLocation || this.arrayLocation -17 === this.game.baddie.arrayLocation){
            this.game.baddie.ded = true
        }
        //collision of bomb with player
        if(this.arrayLocation === this.game.player.arrayLocation || this.arrayLocation === this.game.player.arrayLocation + 1 || this.arrayLocation === this.game.player.arrayLocation -1 || this.arrayLocation === this.game.player.arrayLocation + 17 || this.arrayLocation === this.game.player.arrayLocation -17){
            this.game.player.ded = true
        }
    }
}