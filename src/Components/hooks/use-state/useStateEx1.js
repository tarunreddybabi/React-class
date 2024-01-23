import { useState } from "react";

const UseStateExample1 = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(100);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const startTimer = () => {
    setInterval(() => {
      if (timer === 0) {
        alert("Time is up");
      } else {
        setTimer((timer) => timer - 1);
      }
    }, 1000);
  };

  return (
    <>
      <h2>Use State Example {count} </h2>
      <button onClick={handleIncrement}>Click to Increment</button>
      <h2 style={{ color: timer < 50 ? "red" : "black" }}>Timer -- {timer}</h2>
      <button onClick={startTimer}>Start Timer</button>
    </>
  );
};

export default UseStateExample1;
