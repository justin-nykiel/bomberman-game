const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.width = 850
canvas.height = 550

const keys = []


const player = {
    x: 0,
    y: 50,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
}
const bomberman = new Image()
bomberman.src = 'ironman.png'

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    context.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

//creating bricks on  canvas
var brickRowCount = 5;
var brickColumnCount =8;
var brickWidth = 50;
var brickHeight = 50;
var brickPadding = 50;
var brickOffsetTop = 50;
var brickOffsetLeft = 50;
var bricks = [];
let breakableBricks = []
//2d array of all the bricks
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0};
    }
}
for(var c=0; c < 17; c++) {
    breakableBricks[c] = []
    for(var r=0; r < 11; r++) {
        let random = Math.floor(Math.random() * 3)
        if(random === 0 && c !== 0){
            breakableBricks[c][r] = { x: -50, y: -50, there: true}
        } else{
            breakableBricks[c][r] = {x:-50, y: -50, there: false}
        }
    }
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            context.beginPath();
            context.rect(brickX, brickY, brickWidth, brickHeight);
            context.fillStyle = "#0095DD";
            context.fill();
            context.closePath();
        }
    }
}
function drawBreakableBricks() {
    for(var c=0; c < 17; c++) {
        for(var r=0; r < 11 ; r++) {
            var brickX = (c*(brickWidth));
            var brickY = (r*(brickHeight));
            breakableBricks[c][r].x = brickX;
            breakableBricks[c][r].y = brickY;
            if(breakableBricks[c][r].there === true){
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = "#000000";
                context.fill();
                context.closePath();
            }
        }
    }
}


let goRight = true
let goDown = true
let goUp = true
let goLeft = true

function collisionDetection() {
    //loops through the array of brick objects and checks for collisions for each corner of the sprite
    for (var c = 0; c < 17; c++) {
        for (var r = 0; r < 11; r++) {
            let b = []
            if(c < brickColumnCount && r < brickRowCount){
                b = bricks[c][r]
            }
            let bb = []
            //only consider breakable bricks if they are there
            if(breakableBricks[c][r].there === true && c !== 0){
                bb = breakableBricks[c][r]
                console.log(bb.y)
            }
                if ((player.x + player.width > b.x + 5) && (player.x + player.width < b.x + brickWidth) || (player.x > b.x && player.x < b.x + brickWidth -5)) {
                    if(keys[38]){
                        goUp = false
                    } else if(keys[40]){
                        goDown = false
                        
                    }
                } else if((player.y > b.y) && (player.y < b.y + brickHeight -5) || (player.y + player.height > b.y) && (player.y + player.height < b.y + brickHeight)){
                    if(keys[39]){
                        goRight = false
                        
                    } else if(keys[37]){
                        goLeft = false
                        
                    }
                
                } else if(((player.y > bb.y) && (player.y < bb.y + brickHeight -5) || (player.y + player.height > bb.y) && (player.y + player.height < bb.y + brickHeight)) && ((player.x + player.width > bb.x + 5) && (player.x + player.width < bb.x + brickWidth) || (player.x > bb.x && player.x < bb.x + brickWidth -5))){
                
                    if(keys[39]){
                        goRight = false
                        player.x -= 5
                    } else if(keys[37]){
                        goLeft = false
                        player.x += 5
                    } else if(keys[38]){
                        goUp = false
                        player.y += 5
                    } else if(keys[40]){
                        goDown = false
                        player.y -= 5
                    }
                    console.log('oh jeeze' + bb.y + 're' + player.y)
                }
                    
    }
}
}


window.addEventListener('keydown', function(e){
    keys[e.keyCode] = true
    player.moving = true

})
window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]
    player.moving = false
})

function movePlayer(){
        if (keys[38] && goUp){
            if(player.y > 0){
                player.y -= player.speed
                player.frameY = 3
                goDown = true
                goLeft = true
                goRight = true
            }
        }
        if (keys[40] && goDown){
            if(player.y < 502){
                player.y += player.speed
                player.frameY = 0
                goUp = true
                goLeft = true
                goRight = true
            }
        }
        if (keys[39] && goRight){
            if(player.x <= 768 + 50){
                player.x += player.speed
                player.frameY = 2
                goDown = true
                goLeft = true
                goUp = true
            }
        }
        if (keys[37] && goLeft){
            if(player.x >= 0){
                player.x -= player.speed
                player.frameY = 1
                goDown = true
                goUp = true
                goRight = true
            }
        }
    
}
function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving === true){
        player.frameX++
    } else {
        player.frameX = 0
    }
}

let fps, fpsInterval, startTime, now, then, elapsed
function startAnimating(fps){
    fpsInterval = 1000/fps
    then = Date.now()
    startTime = then
    animate()
}
function animate(){
    requestAnimationFrame(animate)
    now = Date.now()
    elapsed = now - then
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval)
        context.clearRect(0,0, canvas.width, canvas.height)
        drawBreakableBricks()
        drawBricks()
        drawSprite(bomberman, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
        collisionDetection()
        movePlayer()
        handlePlayerFrame()
    }
    
}

startAnimating(15)
