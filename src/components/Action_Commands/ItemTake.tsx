import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Take" || action === "T") {
    // Adds item to Backpack, Removes item from Current Room
    let takeItem = await ask(`\nWhat would you like to take?`);
    tookenItem = capitalizePlayerInput(takeItem);
    tookenItem = nameChecker(tookenItem);
    if (
      locations[currentLocation].inventory.includes(tookenItem) === true &&
      tookenItem === "Bag Of Jewels"
    ) {
      BagOfJewels.followUp();
    } else if (
      locations[currentLocation].inventory.includes(tookenItem) === true
    ) {
      itemExchange(
        locations[currentLocation].inventory,
        hero.inventory,
        tookenItem
      );
      colorChangeWords(
        `\nYou have picked up the ${tookenItem}.\n`,
        highlightedWords
      );
    } else if (
      locations[currentLocation].interact.includes(tookenItem) === true
    ) {
      //Immovable Object example, stops Hero from Taking NPCs
      colorChangeWords(
        `\nWait ${heroName}!\nYou can't pick up the ${tookenItem}.\nWhat would the other townsfolk think if they saw you?\n`,
        highlightedWords
      );
    } else {
      colorChangeWords(
        `\nSorry ${heroName}, there is no ${takeItem} for you to take.\n`,
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

const ItemTake = (props: any) => {
  return (
    <>
      <Buttons
        color="primary"
        onClick={() => {
          console.log("Take Item Clicked");
        }}
      >
        Take Item
      </Buttons>
    </>
  );
};

export default ItemTake;
