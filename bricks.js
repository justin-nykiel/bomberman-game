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

// //creating bricks on  canvas
// var brickRowCount = 5;
// var brickColumnCount =8;
// var brickWidth = 50;
// var brickHeight = 50;
// var brickPadding = 50;
// var brickOffsetTop = 50;
// var brickOffsetLeft = 50;
// var bricks = [];
// let breakableBricks = []
// //2d array of all the bricks
// for (var c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (var r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0};
//     }
// }
// for(var c=0; c < 17; c++) {
//     breakableBricks[c] = []
//     for(var r=0; r < 11; r++) {
//         let random = Math.floor(Math.random() * 3)
//         if(random === 0 && c !== 0){
//             breakableBricks[c][r] = { x: -50, y: -50, there: true}
//         } else{
//             breakableBricks[c][r] = {x:-50, y: -50, there: false}
//         }
//     }
// }
// function drawBricks() {
//     for(var c=0; c<brickColumnCount; c++) {
//         for(var r=0; r<brickRowCount; r++) {
//             var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
//             var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
//             bricks[c][r].x = brickX;
//             bricks[c][r].y = brickY;
//             context.beginPath();
//             context.rect(brickX, brickY, brickWidth, brickHeight);
//             context.fillStyle = "#0095DD";
//             context.fill();
//             context.closePath();
//         }
//     }
// }
// function drawBreakableBricks() {
//     for(var c=0; c < 17; c++) {
//         for(var r=0; r < 11 ; r++) {
//             var brickX = (c*(brickWidth));
//             var brickY = (r*(brickHeight));
//             breakableBricks[c][r].x = brickX;
//             breakableBricks[c][r].y = brickY;
//             if(breakableBricks[c][r].there === true){
//                 context.beginPath();
//                 context.rect(brickX, brickY, brickWidth, brickHeight);
//                 context.fillStyle = "#000000";
//                 context.fill();
//                 context.closePath();
//             }
//         }
//     }
// }
