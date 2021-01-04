# bomberman-game
Created a bomberman game using html canvas API and javascript.

## Technologies Used
* HTML
* CSS
* Javascript
* Canvas API

## Approach

I used a 2d array to reperesent the gameboard as a grid to keep track of blocks. As the player and enemy navigate the board a grid location is determined and updated based on its x and y coordiantes on the canvas. As the game objects move or are placed on the board, their grid location is used to check against the 2d array in order to determine if a collision exists. 

## Rules:
Attempt to navigate Ironman to the corner of the map marked "Finish"

In order to finish you must first defeat all enemies on the mao

Watch out, Ironman will die if he runs into an enemy or is too close to his own bomb

## Controls:
Use the arrow keys to move in their corresponding directions

Use the space bar to place a bomb

## Play Game:
https://justin-nykiel.github.io/bomberman-game/
