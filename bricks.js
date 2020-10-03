export default class Brick {
    constructor(game, x,y, breakable = false,status = true, width = 50, height = 50) {
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.status = status
        this.breakable = breakable
        this.image = document.getElementById('stoneBrick')
        // from https://opengameart.org/content/32x32-blocks-and-more Creator: EntropyPhi
        this.game = game
        this.breakableImage = document.getElementById('breakable')
        
    }
    //repaints the bricks each frame, paints breakable v unbreakable bricks based on their properties
    updateDrawing(context){
        if(!this.breakable){
            context.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height,
            )
        }else if(this.status && this.breakable){
            context.drawImage(
                this.breakableImage,
                this.x,
                this.y,
                this.width,
                this.height,
            )
        }
    }

}


