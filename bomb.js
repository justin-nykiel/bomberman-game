export default class Bomb {
    constructor(game){
        this.game = game
        this.x = this.game.player.x + this.game.player.width/2
        this.y = this.game.player.y + this.game.player.height/2
        this.image = document.getElementById('bomb')
        this.width = 40
        this.height = 40
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
}