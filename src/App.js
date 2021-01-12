import { useEffect, useState } from "react";
import { Popup } from "./components/Popup";

export const App = () => {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(!timeTrigger);
    }, 3000);
  }, []);

  return (
    <div>
      <main>
        <h1>React Popups</h1>
        <br />
        <br />
        <button onClick={() => setTrigger(!trigger)}>Open Popup</button>
      </main>
      <Popup trigger={trigger} setTrigger={setTrigger}>
        <h3>My Popup</h3>
        <p>This is my button triggered popup</p>
      </Popup>
      <Popup trigger={timeTrigger} setTrigger={setTimeTrigger}>
        <h3>My Timed Popup</h3>
        <p>This is my time triggered popup</p>
      </Popup>
    </div>
  );
};
