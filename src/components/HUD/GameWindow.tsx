import React from "react";
import Buttons from "../Buttons";
import Backlog from "./Backlog";

/* let actions: string[] = [];

const displayAction = (action: string) => {
  console.log("displayAction", action);
}; */
//todo something is broke
const GameWindow = (props: any) => {
  return (
    <>
      <div className="game_screen">
        <div id="game_log">
          {/* <Backlog actions={actions} onSelection={displayAction}></Backlog> */}
          <p id="adventure_text">
            Press the START button to begin! lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni in tenetur magnam eligendi odit
            fugiat nisi placeat distinctio corporis maiores ut temporibus rem
            perferendis ex, quas quod a. Praesentium, saepe! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Magni in tenetur magnam
            eligendi odit fugiat nisi placeat distinctio corporis maiores ut
            temporibus rem perferendis ex, quas quod a. Praesentium, saepe!
            lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Magni in tenetur magnam eligendi odit fugiat nisi placeat distinctio
            corporis maiores ut temporibus rem perferendis ex, quas quod a.
            Praesentium, saepe! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magni in tenetur magnam eligendi odit fugiat nisi
            placeat distinctio corporis maiores ut temporibus rem perferendis
            ex, quas quod a. Praesentium, saepe!
          </p>
        </div>
        <Buttons
          className={"button start"}
          onclick={console.log("Start Clicked")}
        >
          Start Game
        </Buttons>
        <button className={"button start"} onClick={"titleScreen()"}>
          Start Game
        </button>
      </div>
    </>
  );
};

export default GameWindow;
