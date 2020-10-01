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
}
}