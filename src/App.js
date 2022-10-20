import { useEffect, useState } from "react";
import "./App.css";
import { audioList } from "./audioList";
import Button from "./Button";

function App() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  const detectKeyDown = (e) => {
    const item = audioList.filter((item) => item.name === e.key.toUpperCase());

    if (item.length !== 0) {
      document.getElementById(item[0].name).play();
      setDisplay(item[0].display);
    }
  };

  return (
    <div id="drum-machine">
      <div className="buttons">
        {audioList.map((item) => (
          <Button
            key={item.name}
            onClick={detectKeyDown}
            name={item.name}
            source={item.src}
          />
        ))}
      </div>
      <div id="display">{display}</div>
    </div>
  );
}

export default App;
