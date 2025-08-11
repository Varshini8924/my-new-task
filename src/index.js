import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button
        style={{
          background: "tomato",
          color: "white",
          padding: "8px 12px",
          margin: "0 4px",
          border: "none",
          borderRadius: "5px"
        }}
        onClick={decrement}
      >
        -
      </button>
      <button
        style={{
          background: "mediumseagreen",
          color: "white",
          padding: "8px 12px",
          margin: "0 4px",
          border: "none",
          borderRadius: "5px"
        }}
        onClick={increment}
      >
        +
      </button>
      <button
        style={{
          background: "royalblue",
          color: "white",
          padding: "8px 12px",
          margin: "0 4px",
          border: "none",
          borderRadius: "5px"
        }}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SimpleCounter />);
ateRoot(document.getElementById("root"));
root.render(<App />);

