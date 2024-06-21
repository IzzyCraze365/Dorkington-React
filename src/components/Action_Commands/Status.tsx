import React from "react";
import Buttons from "../Buttons";

/* 
if (action === "Status" || action === "S") {
    //Gives the player a quick check of their current Status
    colorChangeWords(`\nStatus: ${hero.status}\n`, highlightedWords);
  } else {
    unknownPrompt(action);
  }
 */

const Status = (props: any) => {
  return (
    <>
      <Buttons
        color="info"
        onClick={() => {
          console.log("Status Clicked");
        }}
      >
        Status
      </Buttons>
    </>
  );
};

export default Status;
