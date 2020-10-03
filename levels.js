import Brick from './bricks.js'

//adds bricks to a 2d arry to represent the gamboard based on level loaded
export function levelBuilder(game, level) {
    let bricks = []
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex)=> {
            if(brick === 2){
                let x = brickIndex * 50
                let y = rowIndex * 50 
                bricks.push(new Brick(game, x, y))
            } else if(brick == 1){
                let x = brickIndex * 50
                let y = rowIndex * 50 
                bricks.push(new Brick(game, x, y, true))
            } else{
                bricks.push(new Brick(game, -100, -100, false, false))
            }
            
        })

    })
    
    return bricks
}

export const level1 = [
    [0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0],
    [0,2,1,2,0,2,1,2,0,2,0,2,0,2,0,2,1],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0],
    [0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0],
    [1,2,1,2,0,2,0,2,1,2,0,2,0,2,0,2,0],
    [0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0],
    [0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0],
    [0,2,0,2,1,2,0,2,0,2,0,2,0,2,0,2,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0],
]
