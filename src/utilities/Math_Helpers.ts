//! This file contains all of my helper functions.

// Since they are all being exported with put "export" before each function so we can reference them

// Function to Generate a Random Number
export function randomNum(min: number, max: number):number {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }
  
// Proper to say explicitly that both parameters are numbers (inside the parenthesis) and that it returns a number (outside the parenthesis)
