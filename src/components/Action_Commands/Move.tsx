import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Move" || action === "M") {
    //Move from one location to an 'adjacent' one
    await locationMove();
 */

//! Functions that handle Movement
// This function allows the player to change locations
async function locationMove() {
  let newLocation = "";
  colorChangeWords(
    `\nYou are currently standing in the ${currentLocation}.`,
    highlightedWords
  );
  newLocation = await ask(`Where would you like to go?`);
  newLocation = capitalizePlayerInput(newLocation);
  newLocation = nameChecker(newLocation);
  locationUpdate(newLocation);
}

function locationUpdate(newLocation) {
  if (newLocation === "HERO-DEATH") {
    //Special Move
    currentLocation = "Underworld";
    colorChangeWords(
      `\n${locations[currentLocation].description}`,
      highlightedWords
    ); //Gives a description when you enter a new location.
    return currentLocation;
  } else if (newLocation === "HERO-UNDEATH") {
    //Special Move
    currentLocation = "Town Triangle";
    colorChangeWords(
      `\n${locations[currentLocation].description}`,
      highlightedWords
    ); //Gives a description when you enter a new location.
    return currentLocation;
  } else {
    let possibleOptionsToUpdateLocation =
      locations[currentLocation].possibleLocations;
    if (possibleOptionsToUpdateLocation.includes(newLocation) === true) {
      // Found a match and we are able to update the state in the function "locationMove"
      if (locations[newLocation].doorLock === false) {
        currentLocation = newLocation;
        colorChangeWords(
          `\n${locations[currentLocation].description}`,
          highlightedWords
        ); //Gives a description when you enter a new location.
        return currentLocation;
      } else {
        //This is my Lock and Key Puzzle
        if (hero.inventory.includes("Sword") !== true) {
          colorChangeWords(
            `\nYou venture into the darkness of the woodlands.\nTravelling around the forest without a weapon was a big mistake.\nYou quickly find yourself cornered by lions, tigers and bears in the woods.\n    "Oh My"\nIt doesn't take them long to gobble you up.\n\nIf only you had a Sword with you.`,
            highlightedWords
          );
          currentLocation = "Underworld";

          colorChangeWords(
            `\n${locations[currentLocation].description}`,
            highlightedWords
          ); //Gives a description when you enter a new location.
          return currentLocation;
        } else {
          if (hero.inventory.includes("Town Map") === true) {
            colorChangeWords(
              `\nYou follow the Town Map and find a hidden trail.`,
              highlightedWords
            );
            currentLocation = newLocation;
            colorChangeWords(
              `\n${locations[currentLocation].description}`,
              highlightedWords
            ); //Gives a description when you enter a new location.
            return currentLocation;
          } else {
            colorChangeWords(
              `\nIn the darkness of the woods you get turned around...\n     Did you turn left or right?\n     What is that strange noise?\n     It sounds close!\nYou swing your Sword at a nearby bush!\n     It must have been the wind...\n     Haven't you already passed that skull-shaped rock five times?\n     You are lost in the woods!!!\n     And you end up right back where you began.\nA Town Map would be really useful in this situation.`,
              highlightedWords
            );
            return currentLocation;
          }
        }
      }
    } else if (newLocation === "Exit") {
      quitGame();
    } else {
      // If the player tries to move to an invalid location they get the following response
      colorChangeWords(
        `\nSorry ${heroName}, but you can't go there.\nFrom your current location you can go to\nthe ${possibleOptionsToUpdateLocation.join(
          ", or the "
        )}\n`,
        highlightedWords
      );
    }
  }
}

const Move = (props: any) => {
  return (
    <>
      <Buttons
        color="primary"
        onClick={() => {
          console.log("Move Clicked");
        }}
      >
        Move
      </Buttons>
    </>
  );
};

export default Move;
