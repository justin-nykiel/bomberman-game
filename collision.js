export function collisionDetection(player, gameObject) {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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