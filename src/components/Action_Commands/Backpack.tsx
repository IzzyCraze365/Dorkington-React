import React from "react";

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

const Backpack = () => {
  return <div>Backpack</div>;
};

export default Backpack;
