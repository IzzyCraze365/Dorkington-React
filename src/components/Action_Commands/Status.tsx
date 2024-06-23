import React, { useState } from "react";
import Buttons from "../Buttons";

const [heroStatus, setHeroStatus] = useState("Healthy")

/* 
if (action === "Status" || action === "S") {
    //Gives the player a quick check of their current Status
    colorChangeWords(`\nStatus: ${hero.status}\n`, highlightedWords);
  } else {
    unknownPrompt(action);
  }
 */

//TODO get the usestate to work

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
     <p>{"Status = "&&{heroStatus}}</p>
    </>
  );
};

export default Status;
