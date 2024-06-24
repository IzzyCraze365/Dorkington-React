import React from "react";
import Backpack from "./Backpack";
import Help from "./Help";
import Interact from "./Interact";
import ItemDrop from "./ItemDrop";
import ItemTake from "./ItemTake";
import Look from "./Look";
import Move from "./Move";
import Status from "./Status";
import Exit from "./Exit";

const ActionPanel = (props: any) => {
  return (
    <>
      <div className="p-4 mb-2 bg-secondary boarder border-danger rounded-circle align-middle">
        <div className="m-1">
          <Move>Move</Move>
          <Interact>Interact</Interact>
        </div>
        <div className="m-1">
          <ItemTake>Take</ItemTake>
          <ItemDrop>Drop</ItemDrop>
        </div>
        <div className="m-1">
          <Look>Look</Look>
          <Backpack>Backpack</Backpack>
        </div>
        <div className="m-1">
          <Status>Status</Status>
          <Help>Help</Help>
        </div>
        <Exit>Exit</Exit>
      </div>
      <Status>Chewey</Status>
    </>
  );
};

export default ActionPanel;
