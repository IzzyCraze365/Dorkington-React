import React from "react";
import Buttons from "../Buttons";

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

const Exit = (props: any) => {
  return (
    <>
      <Buttons
        color="danger"
        onClick={() => {
          console.log("Exit Clicked");
        }}
      >
        Exit
      </Buttons>
    </>
  );
};

export default Exit;
