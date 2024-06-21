import { useState } from "react";
import "./App.css";
import ActionPanel from "./components/Action_Commands/ActionPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Dorkington</h1>
      <ActionPanel>Action Panel</ActionPanel>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
