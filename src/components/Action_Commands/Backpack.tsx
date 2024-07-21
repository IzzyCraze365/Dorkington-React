import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Backpack" || action === "B") {
    // Displays inventory
    itemDisplay(hero.inventory);
 */
//TODO what I need is a way to pass the Player object a prop
function itemDisplay(player) {
  colorChangeWords(
    `\nYour backpack contains the following items: ${player.join(", ")}`,
    highlightedWords
  );
}

const Backpack = (props: any) => {
  return (
    <>
      <Buttons
        color="info"
        onClick={() => {
          console.log("Backpack Clicked");
        }}
      >
        Backpack
      </Buttons>
    </>
  );
};

export default Backpack;
