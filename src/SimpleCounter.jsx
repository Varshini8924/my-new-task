import React, { useState } from "react";

export default function SimpleCounter() {
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
    <div>
      <h2>Counter: {count}</h2>
      <button style={{ color: "red" }} onClick={decrement}>-</button>
      <button style={{  color: "blue" }} onClick={increment}>+</button>
      <button style={{ color: "green" }} onClick={reset}>Reset</button>
    </div>
  );
}
