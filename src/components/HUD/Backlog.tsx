import React from "react";
import { useState } from "react";

// Base this off of the ListGroup.tsx but make it so every thing is saved in an array

interface backlogHistoryProps {
  actions: string[];
  onSelection: (action: string) => void; //similar to an onClick action
}

function backlogHistory({ actions, onSelection }: backlogHistoryProps) {
  // Initially no item is selected.
  const [actionIndex, setActionIndex] = useState(-1);
}

const Backlog = () => {
  return (
    <>
      <div>Backlog</div>
      {actions.length === 0 && <p>Not Started</p>}
      <ul className="backlog">
        {actions.map((action, index) => (
          <li
            key={action}
            onClick={() => {
              setActionIndex(index);
              onSelection(action);
            }}
            className={
              actionIndex === index ? "backlog-action active" : "backlog-action"
            }
          >
            {action}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Backlog;
