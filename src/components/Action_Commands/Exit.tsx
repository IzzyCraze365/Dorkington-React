import React from 'react'

/* 
if (action === "Exit" || action === "E") {
    //End the game
    quitGame();
 */

// Fucntion that handles Quiting the game.
function quitGame() {
  colorChangeWords(
    `\nThis is where the Adventure of ${heroName} comes to an end.\n`,
    highlightedWords
  );
  process.exit();
}

const Exit = () => {
  return (
    <div>Exit</div>
  )
}

export default Exit