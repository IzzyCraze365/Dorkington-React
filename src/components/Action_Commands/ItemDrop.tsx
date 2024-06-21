import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Drop" || action === "D") {
    // Removes item from Backpack, Adds item to Current Room
    let dropItem = await ask(`\nWhat would you like to drop?`);
    droppingItem = capitalizePlayerInput(dropItem);
    droppingItem = nameChecker(droppingItem);
    if (hero.inventory.includes(droppingItem) === true) {
      itemExchange(
        hero.inventory,
        locations[currentLocation].inventory,
        droppingItem
      );
      colorChangeWords(
        `\nYou have dropped the ${droppingItem}.\n`,
        highlightedWords
      );
    } else {
      colorChangeWords(
        `\nSorry ${heroName}, you don't have a ${dropItem} to drop.\n`,
        highlightedWords
      );
    }
 */

// This is what allows "Take" and "Drop" to work with items
function itemExchange(giver, receiver, itemToBeExchanged) {
  let index = giver.indexOf(itemToBeExchanged);
  if (index !== -1) {
    giver.splice(index, 1);
    receiver.push(itemToBeExchanged);
  }
}

const ItemDrop = (props: any) => {
  return (
    <>
      <Buttons
        color="primary"
        onClick={() => {
          console.log("Drop Item Clicked");
        }}
      >
        Drop Item
      </Buttons>
    </>
  );
};

export default ItemDrop;
