import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Backpack" || action === "B") {
    // Displays inventory
    itemDisplay(hero.inventory);
 */

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
