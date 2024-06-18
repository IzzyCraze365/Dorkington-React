import React from "react";

/* if (action === "Help" || action === "H") {
    //Brings up the Help Menu
    helpMenu(); */

function helpMenu() {
  colorChangeWords(
    `\nYou may perform any of the following actions:\n     Type "Move" or "m" = Move to a Nearby Location.\n     Type "Look" or "l" = Look around for Clues and Items.\n     Type "Interact" or "i" = Interact with a Person or Item\n     Type "Status" or "s" = Check your General Wellbeing \n     Type "Backpack" or "b" = Check your Backpack's Inventory\n     Type "Take" or "t" = Pick up an Item from this Location\n     Type "Drop" or "d" = Drop an Item to this Location\n     Type "Help" or "h" = Open the Help Screen\n     Type "Exit" or "e" = Exit the Game at any time`,
    highlightedWords
  );
}

const Help = () => {
  return <div>Help</div>;
};

export default Help;
