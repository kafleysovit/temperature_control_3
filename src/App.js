import "./App.css";
import { useState } from "react";
function App() {
  const [temp, settemp] = useState(true);
  const [current_temp, setcurrent_temp] = useState(0);
  const [temp_color, settemp_color] = useState("cold");
  const handletemp = (value) => {
    const new_temp = current_temp + value;
    if (new_temp <= 15) {
      settemp_color("cold");
    } else if (new_temp <= 30) {
      settemp_color("good");
    } else {
      settemp_color("hot");
    }
    setcurrent_temp(current_temp + value);
  };
  return (
    <div className="App">
      <div className="toggle">
        {temp ? (
          <>
            <button
              onClick={() => settemp(true)}
              className="temp"
              style={{ color: "white", backgroundColor: "blue" }}
            >
              F
            </button>
            <button onClick={() => settemp(false)} className="temp">
              C
            </button>
          </>
        ) : (
          <>
            <button onClick={() => settemp(true)} className="temp">
              F
            </button>
            <button
              onClick={() => settemp(false)}
              className="temp"
              style={{ color: "white", backgroundColor: "blue" }}
            >
              C
            </button>
          </>
        )}
      </div>
      <div
        className={`circle ${temp_color}`}
        // style={
        //   current_temp < 16
        //     ? { backgroundColor: `lightblue` }
        //     : current_temp < 31
        //     ? { backgroundColor: "yellow", color: "blue" }
        //     : { backgroundColor: "red" }
        // }
      >
        <h1>
          {temp ? (current_temp * 1.8 + 32).toFixed(1) : current_temp}
          {temp ? " °F" : " °C"}
        </h1>
      </div>
      <div className="buttons">
        <button onClick={() => handletemp(1)}>+</button>
        <button onClick={() => handletemp(-1)}>-</button>
      </div>
    </div>
  );
}

export default App;
