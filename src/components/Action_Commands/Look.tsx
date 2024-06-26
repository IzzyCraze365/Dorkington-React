import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Look" || action === "L") {
    //Let's player get a description of the Location they are in, good for finding Interactable targets
    colorChangeWords(
      `${locations[currentLocation].description}`,
      highlightedWords
    );
    if (locations[currentLocation].inventory.length > 0) {
      // checks to see if there is anything in the Room's Inventory
      colorChangeWords(
        `Looking around, you see: ${locations[currentLocation].inventory.join(
          ", "
        )}\n`,
        highlightedWords
      );
    } else {
      colorChangeWords(
        `Looking around, you don't see any items.`,
        highlightedWords
      );
    }
 */

const Look = (props: any) => {
  return (
    <>
      <Buttons
        color="info"
        onClick={() => {
          console.log("Look Clicked");
        }}
      >
        Look
      </Buttons>
    </>
  );
};

export default Look;
