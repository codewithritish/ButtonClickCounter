import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    //count++;
    setCount(count + 1);
  };
  return (
    <>
      <div className="App">
        <h1>Welcome to Game</h1>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
      </div>
    </>
  );
}
