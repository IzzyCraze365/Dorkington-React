import { useState } from "react";
import "./App.css";
import ActionPanel from "./components/Action_Commands/ActionPanel";
import Title from "./components/Title";
import GameWindow from "./components/HUD/GameWindow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Dorkington</h1>
      <Title></Title>
      <div>
        <div className="box">
          <div className="card display_image">
            IMAGE OF LOCATION OR CHARACTER HERE
          </div>
          {/* <GameWindow>Game Window</GameWindow> */}
          <div className="card">
          <ActionPanel>Action Panel</ActionPanel>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        </div>
      </div>
      <div className="input_commands">
        <form id="type_commands">
          Type Your Input Here more form Lines needed
        </form>
      </div>
    </>
  );
}

export default App;
