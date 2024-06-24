//! This file is a "d.ts" because it is not needed during compiling for TypeScript

// An interface describes what the object will look like.
// It does NOT replace the constructors in the Start_Up_Variables, but rather gives them a mold to fit into.

// Player's Backpack Inventory Management
export interface Player {
  name: string;
  inventory: string[];
  status: string;
}

// A List of All Interactable Items
export interface Commodity {
  name: string;
  altNames: string[];
  interact: string;
  followUp: any;
}

// A List of All Interactable People
export interface Person {
  name: string;
  altNames: string[];
  inventory: string[];
  interact: string;
  followUp: any;
  status: string;
}

//List of all the Locations in this Adventure, containing everything they have.
export interface Room {
    name: string,
    altNames: string[],
    doorLock: boolean,
    inventory: string[],
    interact: string[],
    possibleLocations: string[],
    description: string,
}
