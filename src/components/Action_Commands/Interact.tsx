import React from 'react'

/* 
if (action === "Interact" || action === "I") {
    //Let's player Interact with an Object or person
    let interactObject = await ask(`\nWhat do you want to interact with?`);
    interactableObject = capitalizePlayerInput(interactObject);
    //console.log("Test1", interactableObject); //! TEST
    interactableObject = nameChecker(interactableObject);
    //console.log("Test2", interactableObject); //! TEST
    if (
      locations[currentLocation].interact.includes(interactableObject) ===
        true &&
      interactableObject === "Sleeping Child"
    ) {
      await sleepingChildInteraction(); //Special Interaction (see below)
    } else if (
      locations[currentLocation].interact.includes(interactableObject) ===
        true &&
      interactableObject === "Retired Adventurer"
    ) {
      colorChangeWords(retiredAdventurer.interact, highlightedWords);
      await retiredAdventurerInteraction(); //Special Interaction (see below)
    } else if (
      locations[currentLocation].interact.includes(interactableObject) ===
        true &&
      interactableObject === "Musician With A Broken Arm" &&
      musicianWithABrokenArm.status === "Singing"
    ) {
      colorChangeWords(musicianWithABrokenArm.interact, highlightedWords);
      await musicianSongInteraction(); //Special Interaction (see below)
    } else if (
      locations[currentLocation].inventory.includes(interactableObject) ===
        true ||
      hero.inventory.includes(interactableObject) === true
    ) {
      colorChangeWords(
        `\n${interactCommodity[interactableObject].interact}`,
        highlightedWords
      );
      interactCommodity[interactableObject].followUp();
    } else if (
      locations[currentLocation].interact.includes(interactableObject) === true
    ) {
      colorChangeWords(
        `\n${interactPeople[interactableObject].interact}`,
        highlightedWords
      );
      interactPeople[interactableObject].followUp();
    } else {
      colorChangeWords(
        `\nSorry ${heroName}.  You can't interact with ${interactObject}.\n`,
        highlightedWords
      );
    }
 */

const Interact = () => {
  return (
    <div>Interact</div>
  )
}

export default Interact